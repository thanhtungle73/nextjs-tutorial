import { useRouter } from 'next/router';
import * as React from 'react';

export interface CreatePostDetailsPageProps {
}

export default function CreatePostDetailsPage (props: CreatePostDetailsPageProps) {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      Create Post Details Page: {JSON.stringify(router.query)}
    </div>
  );
}
