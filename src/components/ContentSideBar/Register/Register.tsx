import Button from '@components/Button';
import Input from '@components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
    registerSchema,
    type registerFormType
} from '../../../schemas/registerSchema';
import { useSideBar } from '@contexts/SideBarProvider';

const Login: React.FC = () => {
    const { setType, setIsOpen } = useSideBar();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<registerFormType>({ resolver: zodResolver(registerSchema) });

    const onSubmit = (data: registerFormType) => {
        console.log('✅ Form hợp lệ:', data);
        // Gửi API login tại đây
        reset();
    };
    return (
        <div>
            <h2 className="text-lg text-center mb-4">SIGN UP</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    label="Username or email"
                    isRequired
                    {...register('username')}
                    error={errors.username?.message}
                    autoComplete="username"
                />
                <Input
                    type="password"
                    label="Password"
                    isRequired
                    {...register('password')}
                    error={errors.password?.message}
                    autoComplete="new-password"
                />

                <Input
                    label="Confirm Password"
                    type="password"
                    isRequired
                    {...register('confirmPassword')}
                    error={errors.confirmPassword?.message}
                    autoComplete="new-password"
                />

                <Button
                    type="submit"
                    fullWidth={true}
                    className="mt-5 text-xs/5 px-[30px] py-[10px] rounded-sm border border-primary hover:bg-[#FFFFFF00] hover:text-primary duration-300"
                >
                    REGISTER
                </Button>
                <Button
                    fullWidth={true}
                    variant="outline"
                    className="mt-5 text-xs/5 px-[30px] py-[10px] rounded-sm "
                    onClick={() => {
                        setType('login');
                        setIsOpen(true);
                    }}
                >
                    ALREADY HAVE AN ACCOUNT?
                </Button>
            </form>
        </div>
    );
};

export default Login;
