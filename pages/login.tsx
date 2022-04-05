import { authApi } from '@/api/auth-api';
import * as React from 'react';
import { useAuth } from '../hooks';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login();
      console.log('redirect to dashboard');
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  }
  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('Failed to get profile: ', error);
    }
  }
  async function handleLogoutClick() {
    try {
      await logout();
      console.log('redirect to login page');
    } catch (error) {
      console.log('Failed to logout: ', error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
