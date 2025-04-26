import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const Button = forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  children,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-black text-white hover:bg-neutral-800",
    outline: "bg-white text-black border border-neutral-200 hover:border-neutral-300",
  };

  const sizes = {
    default: "px-4 py-2",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={cn(
        "rounded-2xl font-medium transition-all shadow-sm hover:shadow",
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export { Button }; 