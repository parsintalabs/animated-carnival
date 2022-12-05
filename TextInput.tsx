import React from 'react';

export default function TextInput({ type = 'text', ...props }) {
    return <input {...props} type={type} className='w-full rounded-lg border-smoke-700 bg-smoke-900 text-white' />;
}
