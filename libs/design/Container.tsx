import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={twMerge('container mx-auto px-3', className)}>
      {children}
    </div>
  );
};
export default Container;
