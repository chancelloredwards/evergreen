// src/components/ui/Avatar.tsx
'use client';
import React from 'react';
import classNames from 'classnames';

type AvatarProps = {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
};

export function Avatar({ src, alt, size = 'md' }: AvatarProps) {
  const dims = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div
      className={classNames(
        dims[size],
        'rounded-full border-2 border-olive-600 overflow-hidden bg-cream-100'
      )}
    >
      {src ? (
        <img src={src} alt={alt} className="object-cover h-full w-full" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-olive-600 font-display">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
