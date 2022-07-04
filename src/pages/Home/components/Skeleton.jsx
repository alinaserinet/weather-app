import S from '../../../components/Skeleton';

export default function Skeleton() {
  return (
    <>
      <S className='w-16 h-16 mx-auto rounded-full mb-3'/>
      <S className='w-36 h-4 mx-auto mb-6'/>
      <S className='w-36 h-10 mx-auto mb-2'/>
      <S className='w-36 h-3 mx-auto mb-1'/>
      <S className='w-full h-28 mt-16'/>
    </>
  );
}
