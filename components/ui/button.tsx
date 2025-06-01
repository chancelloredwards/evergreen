// src/components/ui/Button.tsx
'use client';
import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  isLoading?: boolean;
};

export function Button({
  variant = 'primary',
  isLoading = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center py-2 px-4 rounded font-medium focus:outline-none focus:ring-2 focus:ring-teal-400';
  const variants = {
    primary: 'bg-olive-600 text-white hover:bg-olive-300',
    secondary: 'bg-cream-100 text-charcoal-900 border border-charcoal-700 hover:bg-cream-50',
    danger: 'bg-burnt-500 text-white hover:bg-burnt-500/80',
    ghost: 'bg-transparent text-olive-600 hover:bg-olive-100',
  };

  return (
    <button
      className={classNames(base, variants[variant], isLoading && 'opacity-75 cursor-not-allowed', className)}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-charcoal-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}
