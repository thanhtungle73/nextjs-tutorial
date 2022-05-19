import { MainLayout } from '@/components/layout';
import { GetServerSideProps } from 'next';
import * as React from 'react';

export interface WorkPageProps {
  data: number;
}

export default function WorkPage({ data }: WorkPageProps) {
  return <div>Work Page</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      data: 1,
    },
  };
};

WorkPage.Layout = MainLayout;
