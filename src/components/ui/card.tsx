// src/components/ui/Card.tsx
'use client';
import React, { ReactNode } from 'react';
import classNames from 'classnames';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={classNames(
        'bg-cream-50 rounded-lg p-6 shadow-md relative overflow-hidden',
        'before:content-[""] before:absolute before:inset-0 before:opacity-5 before:bg-[url("/grain.png")]',
        className
      )}
    >
      {children}
    </div>
  );
}
