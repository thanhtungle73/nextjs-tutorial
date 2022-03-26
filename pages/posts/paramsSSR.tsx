import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {
}

export default function ParamsPage (props: ParamsPageProps) {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      Create Post Details Page: {JSON.stringify(router.query)}
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Cache 5s and return data immediately.
  // Next 5s, return data immediately and call getServerSideProps() in background.
  // Next seconds will call getServerSideProps() again.
  context.res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate=5');
  // Fake slow query.
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return {
    props: {}
  }
}