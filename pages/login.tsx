import * as React from 'react';

export interface ILoginPageProps {}

export default function LoginPage(props: ILoginPageProps) {
  async function handleLoginClick() {}
  async function handleGetProfileClick() {}
  async function handleLogoutClick() {}

  return (
    <div>
      <h1>Login Page</h1>

      <button>Login</button>
      <button>Get Profile</button>
      <button>Logout</button>
    </div>
  );
}
