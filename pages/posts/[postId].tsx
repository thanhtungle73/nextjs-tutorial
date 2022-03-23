import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostPageProps {
  post: any
}

export default function PostDetailsPage ({post}: PostPageProps) {
    const router = useRouter();

    if (!post) return null;

  return (
    <div>
      <h1>Post Detail page</h1>

      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('GET STATIC PATHS');
  const response = await fetch('https://js-post-api.herokuapp.com/api/posts?_page=1');
  const data = await response.json();
  
  // Paths is an array with params.id is postId from API data.
  return {
    paths: data.data.map((post: any) => ({params: {postId: post.id}})),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context: GetStaticPropsContext) => {
  // params may be undefined, so that we need to add ?
  console.log('\nGET STATIC PROPS', context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return {notFound: true}

  // Server-site
  // build-time
  const response = await fetch(`https://js-post-api.herokuapp.com/api/posts/${postId}`);
  const data = await response.json();
  return {
    props: {
      post: data,
    }
  }
}
