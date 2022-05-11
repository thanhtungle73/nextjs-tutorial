import { LayoutProps } from '@/models/index';
import * as React from 'react';

export interface IEmptyLayoutProps {}

export function EmptyLayout({ children }: LayoutProps) {
  return <div>{children}</div>;
}
