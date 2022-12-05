import React from 'react';
import clsx from 'clsx';
import { className } from 'postcss-selector-parser';

interface InputLabelProps {
    htmlFor?: string;
    value?: string;
    children?: React.ReactNode;
    className?: string;
}

export default function InputLabel({ className, htmlFor, value, children, ...props }: InputLabelProps) {
    return (
        <label htmlFor={htmlFor} className={clsx(className, 'mb-2 block')}>
            {value || children}
        </label>
    );
}
