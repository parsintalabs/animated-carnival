import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<any> {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export default function DangerButton({ type = 'submit', children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className='rounded-lg border border-transparent bg-red-500 px-4 py-2 text-white hover:bg-red-600'
        >
            {children}
        </button>
    );
}
