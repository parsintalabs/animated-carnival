'use client';
import { ButtonLink, NavLink } from './NavLink';
import useAuth from '../hooks/useAuth';
import Link from 'next/link';
import AppLogo from './AppLogo';
import React from 'react';
import { Menu } from '@headlessui/react';
import { DropdownButton, DropdownLink } from './DropdownLink';
import clsx from 'clsx';

export default function Navbar() {
    const { user, logout } = useAuth();
    return (
        <nav className='bg-smoke-800'>
            <div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
                <div className={'flex items-center justify-between'}>
                    <Link href='/' className='mr-8'>
                        <AppLogo />
                    </Link>
                    <NavLink href='/'>Home</NavLink>
                </div>

                <div className={'flex items-center justify-between'}>
                    {!user ? (
                        <>
                            <NavLink href='/login'>Login</NavLink>
                            <NavLink href='/register'>Register</NavLink>
                        </>
                    ) : (
                        <>
                            <Menu>
                                {({ open }) => (
                                    <div className='relative'>
                                        <Menu.Button
                                            className={clsx(
                                                open ? 'text-white' : 'text-smoke-400',
                                                'flex items-center gap-x-2 font-light hover:text-white'
                                            )}
                                        >
                                            {user?.name}
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                viewBox='0 0 20 20'
                                                fill='currentColor'
                                                className={clsx(
                                                    open && 'rotate-180',
                                                    'h-5 w-5 transition duration-300'
                                                )}
                                            >
                                                <path
                                                    fillRule='evenodd'
                                                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </Menu.Button>
                                        <Menu.Items className='absolute top-0 right-0 z-50 mt-8 w-56 overflow-hidden rounded-lg border border-smoke-700 bg-smoke-800 py-2 shadow-sm'>
                                            <DropdownLink href={'/dashboard'}>Dashboard</DropdownLink>
                                            <DropdownLink href={'/profile/edit'}>Settings</DropdownLink>
                                            <DropdownLink href={'/profile/edit'}>Security</DropdownLink>
                                            <DropdownLink href={'/profile/edit'}>Help</DropdownLink>
                                            <DropdownLink href={'/profile/edit'}>Contact us</DropdownLink>
                                            <hr className='my-2 border-t border-smoke-700' />
                                            <DropdownButton onClick={logout}>Logout</DropdownButton>
                                        </Menu.Items>
                                    </div>
                                )}
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
