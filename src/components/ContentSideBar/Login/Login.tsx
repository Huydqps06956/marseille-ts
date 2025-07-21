import { authApi } from '@api/authService';
import Button from '@components/Button';
import Input from '@components/Input';
import { useSideBar } from '@contexts/SideBarProvider';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@hooks/useToastify';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormType } from '../../../schemas/loginSchema';
import Cookies from 'js-cookie';
const Login: React.FC = () => {
    const { setType, setIsOpen } = useSideBar();
    const toast = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<LoginFormType>({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (data: LoginFormType) => {
        try {
            const res = await authApi.login(data);
            const { access_token, refresh_token } = res.data;
            Cookies.set('access_token', access_token);
            Cookies.set('refresh_token', refresh_token);

            toast.success('Login successful!');
            reset();
            setIsOpen(false);
        } catch (error: any) {
            return toast.error(
                error.response?.data?.message || 'An error occurred.'
            );
        }
    };

    useEffect(() => {
        const getProfile = async () => {
            const res = await authApi.getProfile();
            console.log(res.data);
        };
        getProfile();
    }, []);
    return (
        <div>
            <h2 className="text-lg text-center mb-4">SIGN IN</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    label="Username or email"
                    isRequired
                    {...register('username')}
                    error={errors.username?.message}
                />
                <Input
                    type="password"
                    label="Password"
                    isRequired
                    {...register('password')}
                    error={errors.password?.message}
                />
                <label className="flex items-center gap-4 cursor-pointer">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </label>

                <Button
                    type="submit"
                    fullWidth={true}
                    className="mt-5 text-xs/5 px-[30px] py-[10px] rounded-sm border border-primary hover:bg-[#FFFFFF00] hover:text-primary duration-300"
                >
                    LOGIN
                </Button>

                <Button
                    fullWidth={true}
                    variant="outline"
                    className="mt-5 text-xs/5 px-[30px] py-[10px] rounded-sm "
                    onClick={() => {
                        setType('register');
                        setIsOpen(true);
                    }}
                >
                    DON'T HAVE AN ACCOUNT?
                </Button>
                <p className="text-center mt-5 font-roboto-mono">
                    Lost your password?
                </p>
            </form>
        </div>
    );
};

export default Login;
