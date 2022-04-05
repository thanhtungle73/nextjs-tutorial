import { authApi } from "@/api/auth-api";
import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export function useAuth(options?: Partial<PublicConfiguration>) {
    // profile
    const {data : profile, error, mutate} = useSWR('/profile', {
        dedupingInterval: 60 * 60 * 1000,
        revalidateOnFocus: false,
        ...options
    })

    async function login() {
        await authApi.login({
            username: 'test1',
            password: '123123'
        })

        // Fetch profile after login to trigger update.
        await mutate()
    }

    async function logout() {
        await authApi.logout();
        mutate({}, false)
    }

    return {
    profile,
    error,
    login,
    logout,
    }
}