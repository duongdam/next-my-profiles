import React from 'react';

function MyAvatar() {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 py-8'>
      <div className='avatar'>
        <div className='w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
          <img className={'w-full h-full'}
               src={'https://firebasestorage.googleapis.com/v0/b/mentoroid-dev.appspot.com/o/images%2Ftemplates%2F854750f8-810f-4911-a47b-fdb0335d3ea1_5bb3b524d63d130514ca4c74aa78e35d.png?alt=media&token=a90c7b18-8197-4af4-aec2-cf12840c9f85'}
               alt={'avatar'} />
        </div>
      </div>
      <div className='text-white text-2xl font-semibold'>P.A Dương Đàm</div>
      <div className='text-zinc-400 text-sm font-medium'>Fullstack Developer</div>
      <div className='flex space-x-4'>
        <a href='https://github.com/duongdam' className='text-zinc-400 hover:text-white'>
          https://github.com/duongdam
        </a>
      </div>
    </div>
  );
}

export default MyAvatar;