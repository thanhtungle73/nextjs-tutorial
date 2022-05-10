import { HeroSection } from '@/components/home';
import RecentPost from '@/components/home/recent-post';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <HeroSection />
      <RecentPost />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
