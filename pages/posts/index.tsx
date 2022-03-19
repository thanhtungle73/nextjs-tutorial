import { GetStaticProps, GetStaticPropsContext } from 'next';
import * as React from 'react';

export interface PostListPageProps {
  posts: any[]
}

export default function PostListPage ({posts}: PostListPageProps) {
  return (
    <div>
      <h1>Posts page list</h1>

      <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
}

// Generics
export const getStaticProps: GetStaticProps<PostListPageProps> = async (context: GetStaticPropsContext) => {
  // Server-site
  // build-time
  console.log('static props');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  console.log(data);

  return {
    props: {
      posts: data.data.map((x: any) => ({id: x.id, title: x.title})),
    }
  }
}
