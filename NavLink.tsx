import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

interface NavLinkInterface {
    href: string;
    className?: string;
    children: React.ReactNode;
}

export const NavLink = ({ href, className, children }: NavLinkInterface) => {
    return (
        <Link
            href={href}
            className={clsx(
                className,
                'inline-flex items-center gap-x-2 py-6 px-4 font-light text-smoke-400 transition hover:text-white focus:outline-none'
            )}
        >
            {children}
        </Link>
    );
};

export const ButtonLink = ({ className, children, ...props }: ButtonHTMLAttributes<any>) => {
    return (
        <button
            {...props}
            className={clsx(
                className,
                'inline-flex items-center gap-x-2 py-6 px-4 text-smoke-400 transition hover:text-white focus:outline-none'
            )}
        >
            {children}
        </button>
    );
};
