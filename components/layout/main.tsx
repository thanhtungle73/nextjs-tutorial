import { LayoutProps } from '@/models/index';
import Link from 'next/link';
import React, { useEffect } from 'react';

export interface IMainLayoutProps {
}

export function MainLayout ({children}: LayoutProps) {
    useEffect(() => {
        console.log('Mainlayout mounting');

        return () => console.log('Mainlayout unmounting');
    }, []);
  return (
    <div>
      <h1>Main Layout</h1>

      <Link href="/">
      <a>Home</a>
      </Link>

      <Link href="/about">
      <a>About</a>
      </Link>

      <div>
          {children}
      </div>
    </div>
  );
}
