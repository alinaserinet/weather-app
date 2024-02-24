import { Skeleton as S } from '@libs/design';

const Skeleton = () => {
  return (
    <>
      <S className="mx-auto mb-3 size-16 rounded-full" />
      <S className="mx-auto mb-6 h-4 w-36" />
      <S className="mx-auto mb-2 h-10 w-36" />
      <S className="mx-auto mb-1 h-3 w-36" />
      <S className="mt-16 h-28 w-full" />
    </>
  );
};

export default Skeleton;
