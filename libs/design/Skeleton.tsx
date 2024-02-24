/* eslint-disable react/no-array-index-key */
import { twMerge } from 'tailwind-merge';

interface SkeletonProps {
  className?: string;
  count?: number;
}

export default function Skeleton({ className, count = 1 }: SkeletonProps) {
  return new Array(count).fill(null).map((_, index) => (
    <div className="flex animate-pulse space-x-4" key={index}>
      <div className={twMerge('rounded-xl bg-gray-800/40', className)} />
    </div>
  ));
}
