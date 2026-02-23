type TButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "transparant" | "ghost";
    size?: "normal" | "normal1";
}   & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ 
    children, 
    className, 
    variant = "primary", 
    size = "normal", ...props
}: TButtonProps) => {

    const baseStyles = "inline-flex items-center justify-center gap-2 duration-300 cursor-pointer hover:scale-105";

    const variants = {
        primary : 'bg-primary text-white hover:bg-primary-85',
        transparant :  'border border-primary text-primary',
        ghost : 'bg-transparent hover:bg-gray-100 text-dark',
    }

    const sizes = {
        normal: 'px-9 py-3 md:px-18 md:py-6',
        normal1: 'px-20 py-3',
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

export default Button;