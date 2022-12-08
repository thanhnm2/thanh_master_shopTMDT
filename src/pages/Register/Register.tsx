import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-orange'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded bg-white shadow-sm'>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-8'>
                <input
                  type='email'
                  name='email'
                  className='py-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='  Email'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'> Email không hợp lệ</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='password'
                  className='py-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='  Password'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'> </div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  name='confirm password'
                  className='py-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                  placeholder='Confirm Password'
                />
                <div className='mt-1 text-red-600 min-h-[1rem] text-sm'> </div>
              </div>
              <div className='mt3'>
                <button className='w-full text-center py-4 px-2 uppercase bg-red-500 text-sm hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>

              <div className='flex item-center justify-center mt-8'>
                <span className='text-gray-400'>Bạn đã có tài khoản???</span>
                <Link className='text-red-400 ml-2' to='/Login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}