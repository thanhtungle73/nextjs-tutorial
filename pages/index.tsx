import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';
import { useSession } from 'next-auth/react';

const Home: NextPageWithLayout = () => {
  const { data: session, status } = useSession();
  console.log({ session, status });
  const router = useRouter();

  function goToDetailsPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  }

  return <Box>Home Page</Box>;
};

Home.Layout = MainLayout;

export default Home;
