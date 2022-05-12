import { Work } from '@/models';
import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import WorkList from '../work/work-list';

export default function FeatureWorks() {
  // Call API to get recent post
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createdAt: '1652293726097',
      updatedAt: '1652293726097',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/thanhtungle/image/upload/v1652373870/learn-nextjs/Rectangle_1_slnlep.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1652293726097',
      updatedAt: '1652293726097',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/thanhtungle/image/upload/v1652373870/learn-nextjs/Rectangle_2_ikcpgl.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1652293726097',
      updatedAt: '1652293726097',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/thanhtungle/image/upload/v1652373870/learn-nextjs/Rectangle_3_fwky1m.jpg',
    },
  ];
  return (
    <Box component="section" pt={2} pb={4}>
      <Container>
        <Typography variant="h5" mb={4}>
          Featured works
        </Typography>

        <WorkList workList={workList} />
      </Container>
    </Box>
  );
}
