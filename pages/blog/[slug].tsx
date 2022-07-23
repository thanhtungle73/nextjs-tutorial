import { Post } from '@/models';
import { getPostList } from '@/utils/post';
import { Container, Divider } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse/lib';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export interface BlogPageProps {
  post: any;
}

export default function PostDetailsPage({ post }: BlogPageProps) {
  if (!post) return null;

  return (
    <Container>
      <h1>Post Detail page</h1>

      <p>{post.title}</p>
      <p>{post.author?.name}</p>
      <p>{post.description}</p>

      <Divider />

      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  // Paths is an array with params.id is postId from API data.
  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);

  if (!post) return { notFound: true };

  // parse markdown to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');
  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
