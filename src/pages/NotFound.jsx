import { MainLayout } from '../layouts'

export default function NotFound() {
  return (
    <MainLayout>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-white'>PAGE NOT FOUND!</h1>
      </div>
    </MainLayout>
  )
}
