import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<any> {
    children: React.ReactNode;
}

export default function SecondaryButton({ children, ...props }: ButtonProps) {
    return (
        <button {...props} className='rounded-lg border border-smoke-700 bg-transparent px-4 py-2 text-white'>
            {children}
        </button>
    );
}
