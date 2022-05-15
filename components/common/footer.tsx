import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, url: 'http://google.com' },
    { icon: Instagram, url: 'https://google.com' },
    { icon: Twitter, url: 'http://google.com' },
    { icon: LinkedIn, url: 'http://google.com' },
  ];
  return (
    <Box component="footer" py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, idx) => (
          <Box
            key={idx}
            component="a"
            p={2}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} sx={{ fontSize: 40 }} />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  );
}
