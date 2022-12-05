import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
    return <div className='rounded-lg bg-smoke-800 p-6'>{children}</div>;
}

function Header({ children }: { children: React.ReactNode }) {
    return <div className='mb-4'>{children}</div>;
}

function Title({ children }: { children: React.ReactNode }) {
    return <h2 className='text-lg font-medium text-gray-900 dark:text-gray-100'>{children}</h2>;
}

function Subtitle({ children }: { children: React.ReactNode }) {
    return <p className='mt-1 text-sm text-gray-600 dark:text-gray-400'>{children}</p>;
}

Card.Header = Header;
Card.Title = Title;
Card.Subtitle = Subtitle;
export default Card;
