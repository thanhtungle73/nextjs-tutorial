import { LayoutProps } from '@/models/index';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';

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
