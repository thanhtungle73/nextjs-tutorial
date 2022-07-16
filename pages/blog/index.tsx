import { getPostList } from '@/utils/post';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Link from 'next/link';
import * as React from 'react';

export interface BlogListPageProps {
  posts: any[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  return (
    <div>
      <h1>Posts page list</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Generics
export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  // Server-site
  // build-time
  // console.log('static props');
  // const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  // const data = await response.json();
  // console.log(data);

  // Convert markdown file into javascrip object
  const data = await getPostList();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
