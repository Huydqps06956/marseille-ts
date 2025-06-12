import Button from '@components/Button';
import Input from '@components/Input';
import React from 'react';

const Login: React.FC = () => {
    return (
        <div>
            <h2 className="text-lg text-center mb-4">SIGN IN</h2>

            <form>
                <Input type="text" label="Username or email" isRequired />
                <Input type="password" label="Password" isRequired />
                <div className="flex items-center gap-4">
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>

                <Button
                    fullWidth={true}
                    className="mt-5 text-xs/5 px-[30px] py-[10px] rounded-sm border border-primary hover:bg-[#FFFFFF00] hover:text-primary duration-300"
                >
                    LOGIN
                </Button>
                <p className="text-center mt-5 font-roboto-mono">
                    Lost your password?
                </p>
            </form>
        </div>
    );
};

export default Login;
