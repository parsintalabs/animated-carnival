import Link, { LinkProps } from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { Menu } from '@headlessui/react';

interface DropdownLinkProps extends LinkProps {
    children: React.ReactNode;
}

export const DropdownLink = ({ children, href }: DropdownLinkProps) => {
    return (
        <Menu.Item>
            <Link
                href={href}
                className='flex w-full items-center gap-x-2 px-4 py-1 text-left font-light text-smoke-400 hover:bg-smoke-700 hover:text-white'
            >
                {children}
            </Link>
        </Menu.Item>
    );
};

export const DropdownButton = ({ children, ...props }: ButtonHTMLAttributes<any>) => {
    return (
        <Menu.Item>
            <button
                {...props}
                className='flex w-full items-center gap-x-2 px-4 py-1 text-left font-light text-smoke-400 hover:bg-smoke-700 hover:text-white focus:outline-none'
            >
                {children}
            </button>
        </Menu.Item>
    );
};
