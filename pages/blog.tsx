import { MainLayout } from '@/components/layout';
import { GetServerSideProps } from 'next';
import * as React from 'react';
import { getSession, useSession } from 'next-auth/react';

export interface BlogPageProps {
  data: string;
}

export default function BlogPage({ data }: BlogPageProps) {
  const { data: session, status } = useSession();

  return <div>Blog Page - {data}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: session ? 'List of 100 personalized blogs' : 'List of free blogs',
    },
  };
};

BlogPage.Layout = MainLayout;
