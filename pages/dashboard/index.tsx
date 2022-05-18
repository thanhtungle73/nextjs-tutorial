import { MainLayout } from '@/components/layout';
import React, { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export interface DashboardPageProps {}

export default function DashboardPage(props: DashboardPageProps) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const session = await getSession();

      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    })();
  }, [router]);

  if (loading) return <div>Loading...</div>;

  return <div>Dashboard page</div>;
}

DashboardPage.Layout = MainLayout;
