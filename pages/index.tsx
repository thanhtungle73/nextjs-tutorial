import Seo from '@/components/common/seo';
import { HeroSection } from '@/components/home';
import FeatureWorks from '@/components/home/feature-work';
import RecentPost from '@/components/home/recent-post';
import { MainLayout } from '@/components/layout';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '../models';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS Tutorials| Thanh Tung Le',
          description: 'Step by step tutorial',
          url: 'https://vercel.com/',
          thumbnailUrl: '',
        }}
      />
      <HeroSection />
      <RecentPost />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
