import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
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
