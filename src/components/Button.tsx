interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'third' | 'four' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    className?: string;
    rounded?: boolean;
}
const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    disabled = false,
    type = 'button',
    onClick,
    children,
    className = '',
    rounded = false
}) => {
    const varaintStyles = {
        primary: 'bg-primary text-white hover:opacity-90',
        secondary: 'bg-secondary text-white hover:opacity-90',
        third: 'bg-third text-white hover:opacity-90',
        four: 'bg-four text-white hover:opacity-90',
        outline:
            'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white'
    };
    const sizeStyles = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg'
    };
    const widthStyle = fullWidth ? 'w-full' : '';
    const disabledStyle = disabled
        ? 'opacity-50 cursor-not-allowed'
        : 'cursor-pointer';

    const roundedStyle = rounded ? 'rounded-full' : 'roudned-md';

    return (
        <button
            type={type}
            className={` ${widthStyle} ${varaintStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${roundedStyle} transition-all duration-200 
        ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
