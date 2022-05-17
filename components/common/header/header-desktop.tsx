import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTE_LIST } from './routes';

export interface HeaderDesktopProps {
  signIn: any;
  signOut: any;
}

export default function HeaderDesktop({ signIn, signOut }: HeaderDesktopProps) {
  const router = useRouter();

  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ ml: 2, fontWeight: 'medium' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}

          <Link href="/api/auth/signin" passHref>
            <MuiLink
              sx={{ ml: 2, fontWeight: 'medium' }}
              onClick={(e) => {
                e.preventDefault();
                signIn('github');
              }}
            >
              Sign In
            </MuiLink>
          </Link>
          <Link href="/api/auth/signout" passHref>
            <MuiLink
              sx={{ ml: 2, fontWeight: 'medium' }}
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </MuiLink>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
