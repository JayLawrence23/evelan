'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/utils';

const button = cva(
  'rounded-md relative py-2 px-4 transition active:opacity-80 duration-200 hover:-translate-y-0.5 ease-out active:translate-y-0',
  {
    variants: {
      variant: {
        default: 'bg-white text-primary dark:bg-gray-800 hover:text-primary',
        primary: 'bg-primary text-white hover:bg-primary-600',
        secondary: 'bg-secondary text-white',
        black: 'bg-gray-900 text-white',
        destructive: 'bg-rose-100 text-rose-600',
        none: '',
      },
      modifier: {
        outline: 'bg-transparent border border-primary',
        plain:
          'shadow-none bg-transparent border-none px-2 py-1 text-sm hover:bg-primary-200/10',
      },
      size: {
        slim: 'text-sm',
        medium: 'text-base',
        large: 'text-lg',
        xlarge: 'text-xl',
      },
      fullWidth: {
        true: 'w-full',
      },
      disabled: {
        true: 'bg-surfaceDisabled text-textDisabled disabled:opacity-75',
      },
    },
    compoundVariants: [
      {
        modifier: 'outline',
        variant: 'destructive',
        className: 'text-rose-500',
      },
      {
        modifier: 'outline',
        variant: 'primary',
        className: 'text-blue',
      },
      {
        modifier: 'plain',
        variant: 'destructive',
        className: 'text-rose-500',
      },
      {
        modifier: 'plain',
        variant: 'primary',
        className: 'text-blue',
      },
      {
        modifier: 'outline',
        variant: 'primary',
        className: 'text-blue',
      },
      {
        modifier: null,
        size: 'slim',
        className: 'px-3 py-[3px]',
      },
      {
        modifier: 'outline',
        size: 'slim',
        className: 'px-3 py-[3px]',
      },
      {
        modifier: null,
        size: 'medium',
        className: 'px-4 py-2',
      },
      {
        modifier: 'outline',
        size: 'medium',
        className: 'px-4 py-2',
      },
      {
        modifier: null,
        size: 'large',
        className: 'px-6 py-3',
      },
      {
        modifier: 'outline',
        size: 'large',
        className: 'px-6 py-3',
      },
      {
        disabled: true,
        variant: 'default',
        className: 'border-border-Disabled',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

interface IButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof button> {
  children: ReactNode;
  submit?: boolean;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
  disableButton?: boolean;
}

export const Button = ({
  children,
  size,
  variant,
  fullWidth,
  disabled,
  disableButton = false,
  modifier,
  loading,
  submit = false,
  onClick,
  className,
}: IButtonProps) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={cn(
        className,
        button({ variant, modifier, size, fullWidth, disabled })
      )}
      disabled={disableButton}
      onClick={onClick}
    >
      <span className={cn('leading-[1.25rem]', loading && 'text-transparent')}>
        {children}
      </span>
      {loading && (
        <span className='absolute left-1/2 top-1/2 block h-4 w-4 -translate-x-1/2 -translate-y-1/2'>
          <svg
            className='animate-spin'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              className='fill-current'
              d='M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z'
            ></path>
          </svg>
          <span className='sr-only'>Loading</span>
        </span>
      )}
    </button>
  );
};
