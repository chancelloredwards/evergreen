// src/components/ui/Input.tsx
'use client';
import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-charcoal-700 font-medium">{label}</label>}
      <input
        className={classNames(
          'w-full px-3 py-2 border rounded focus:outline-none focus:border-olive-600',
          error ? 'border-burnt-500' : 'border-charcoal-700',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-burnt-500">{error}</p>}
    </div>
  );
}
