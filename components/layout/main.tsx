import Footer from '@/components/common/footer';
import Header from '@/components/common/header';
import { LayoutProps } from '@/models/index';
import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';

export interface IMainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log('Mainlayout mounting');

    return () => console.log('Mainlayout unmounting');
  }, []);
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow={1}>
        {children}
      </Box>

      <Footer />
    </Stack>
  );
}
