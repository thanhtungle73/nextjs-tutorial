import { Card, CardContent } from '@mui/material';
import * as React from 'react';

export interface PostCardProps {}

export default function PostCard(props: PostCardProps) {
  return (
    <Card>
      <CardContent>Post Card</CardContent>
    </Card>
  );
}
