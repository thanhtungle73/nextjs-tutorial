import Header from '@/components/common/header';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


// const Header = dynamic(() => import('@/components/common/header'), {ssr: false})
export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const [postList, setPostList] = useState([]);
  const router = useRouter();

  console.log('About query: ', router.query);
  const page = Number(router.query?.page)

  // useEffect only run in client side.
  useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
      const data = await response.json();

      setPostList(data.data);
    })()
  }, [page]);

  const handleNextClick = () => {
    router.push({
      pathname: '/about',
      query: {
        page: (Number(page) || 1) + 1,
      }
      // Shallow true will update URL in client side not execute getStaticProps again.
    }, undefined, {shallow: true})
  }

  return (
    <div>
        <h1>About Page</h1>
        <Header/>

        <ul className="post-list">
          {postList.map((post:any) => <li key={post.id}>{post.title}</li>)}
        </ul>

        <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}

export async function getStaticProps() {
  console.log('Get Static Props');
  return {
    props: {}
  }
}