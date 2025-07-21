import { useState, forwardRef } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

interface InputProps {
    type: string;
    label: string;
    isRequired: boolean;
    error?: string;
    autoComplete?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            label,
            isRequired = false,
            error,
            autoComplete,
            ...rest
        },
        ref
    ) => {
        const isPassword = type === 'password';
        const [showPassword, setShowPassword] = useState(false);

        return (
            <div className="text-third ">
                <label className="inline-block mb-[5px]">
                    {label} {isRequired && <span>*</span>}
                </label>
                <div className="relative mb-5  ">
                    <input
                        type={isPassword && showPassword ? 'text' : type}
                        autoComplete={autoComplete}
                        className="text-base/8 px-[1.07em] border border-[#e1e1e1] w-full outline-none "
                        ref={ref}
                        {...rest}
                    />
                    {isPassword && (
                        <div
                            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {!showPassword ? <BsEye /> : <BsEyeSlash />}
                        </div>
                    )}

                    {error && (
                        <p className="text-red-500 text-sm mt-1">{error}</p>
                    )}
                </div>
            </div>
        );
    }
);

export default Input;
