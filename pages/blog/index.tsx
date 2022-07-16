import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { getPostList } from '@/utils/post';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log('posts', posts);

  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a>
                  <PostItem post={post} />
                </a>
              </Link>

              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

// Generics
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // Server-site
  // build-time
  // console.log('static props');
  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  // const data = await response.json();
  // console.log(data);

  // Convert markdown file into javascrip object
  const postList = await getPostList();

  return {
    props: {
      posts: postList,
    },
  };
};
