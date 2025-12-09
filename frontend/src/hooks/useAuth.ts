import { useMutation, useQuery,useQueryClient } from '@tanstack/react-query';
import api from '@/src/lib/axios';
import { useRouter } from 'next/navigation';

interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
interface LoginData {
    email: string;
    password: string;
}
export const useRegister = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (data: RegisterData) => {
            // require cookie
            await api.get('/sanctum/csrf-cookie');
            
            // create user
            const response = await api.post('/register', data);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('Success:', data);
            
            // forces React Query to find out who the logged-in user is immediatily
            queryClient.invalidateQueries({ queryKey: ['user'] }); 

            // redirect to home
            router.push('/'); 
        },
        onError: (error: any) => {
            console.error('Auth error:', error.response?.data);
        }
    });
};

export const useLogin = () => {
    const router = useRouter();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ email, password }: LoginData) => {
            await api.get('/sanctum/csrf-cookie');
            const response = await api.post('/login', { email, password });
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            
            router.push('/');
        },
        onError: (error: any) => {
            console.error('Login error:', error.response?.data);
        }
    });
};

// hook to get the logged in user
export const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const response = await api.get('/api/user');
            return response.data;
        },
        retry: false,
        staleTime: 1000 * 60 * 5,
    });
};

// hook to logout
export const useLogout = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async () => {
            await api.post('/logout');
        },
        onSuccess: () => {
            window.location.href = '/signin'; 
        },
    });
};