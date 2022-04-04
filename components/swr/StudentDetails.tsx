import * as React from 'react';
import useSWR from 'swr';

export interface IStudentDetailProps {
  studentId: string;
}

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: IStudentDetailProps) {
  // using /students/${studentId} as key -> no need to fetcher function.
  // If do not use /students/${studentId} as key -> we need to add new fetcher.
  // 3 component in page but using same key -> call api 1 times.
  const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
    revalidateOnFocus: false,
    dedupingInterval: MILLISECOND_PER_HOUR,
  });
  console.log(data);

  function handleMutateClick() {
    mutate({ name: 'This is mutate data' }, true);
  }

  return (
    <div>
      Name: {data?.name || '--'}
      <button onClick={handleMutateClick}>mutate</button>
    </div>
  );
}
