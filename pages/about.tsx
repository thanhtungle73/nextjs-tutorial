import { useRouter } from 'next/router';
import * as React from 'react';

export interface AboutPageProps {
}

export default function AboutPage (props: AboutPageProps) {
  const router = useRouter();

  console.log('About query: ', router.query);

  return (
    <div>
        About Page: Enter to URL /about
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},// will be passed to the page component as props
  } 
}
