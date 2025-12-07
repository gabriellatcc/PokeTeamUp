import { useMutation } from '@tanstack/react-query';
import api from '@/src/lib/axios';
import { useRouter } from 'next/navigation';

interface RegisterData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export const useRegister = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async (data: RegisterData) => {
            const response = await api.post('/register', data);
            return response.data;
        },
        onSuccess: (data) => {
            console.log('Sucess:', data);
            
            router.push('/');
        },
        onError: (error: any) => {
            console.error('Authenticator error:', error.response?.data);
        }
    });
};