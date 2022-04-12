import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export interface IAuthProps {
  children: any;
}

export default function Auth({ children }: IAuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile?.username) router.push('/login');
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
}
