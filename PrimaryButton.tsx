import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<any> {
    children: React.ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

export default function PrimaryButton({ type = 'submit', children, ...props }: ButtonProps) {
    return (
        <button {...props} className='rounded-lg border border-white bg-white px-4 py-2 text-smoke-900'>
            {children}
        </button>
    );
}
