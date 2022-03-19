import { useRouter } from 'next/router';
import * as React from 'react';

export interface ParamsPageProps {
}

export default function ParamsPage (props: ParamsPageProps) {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      Create Post Details Page: {JSON.stringify(router.query)}
    </div>
  );
}
