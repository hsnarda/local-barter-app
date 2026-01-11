import { twMerge } from "tailwind-merge";

export default function Button({ children, variant = 'primary', className, ...props }) {
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
        outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            className={twMerge(
                "px-4 py-2 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
