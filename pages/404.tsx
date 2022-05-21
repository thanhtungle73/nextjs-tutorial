import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';

export interface PageNotFoundProps {}

export default function PageNotFound(props: PageNotFoundProps) {
  return (
    <Container maxWidth="md">
      <Stack sx={{ height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        Opps! 404 page not found
      </Stack>
    </Container>
  );
}
