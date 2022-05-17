import * as React from 'react';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';
import { signIn, signOut } from 'next-auth/react';

export default function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop signIn={signIn} signOut={signOut} />
    </>
  );
}
