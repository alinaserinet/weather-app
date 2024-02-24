import { twMerge } from 'tailwind-merge';

interface AlertMessageProps {
  className?: string;
  message: string;
}

const AlertMessage = ({ className, message }: AlertMessageProps) => {
  return (
    <span className={twMerge('pl-2 text-xs text-gray-200', className)}>
      {message}
    </span>
  );
};

export default AlertMessage;
