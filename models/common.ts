import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { CacheProvider, EmotionCache } from '@emotion/react';

export interface LayoutProps {
    children: ReactNode
}

export type NextPageWithLayout = NextPage & {
    // Use in jsx must return a ReactElement.
    // Cannot return ReactNode, because ReactNode contains values: number,
    // string, null, undefined,... and null, undefined cannot be an element 
    // Component that receive layoutProps and return ReactElement
    Layout?: (props: LayoutProps) => ReactElement
  }
  
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
    emotionCache?: EmotionCache
  }