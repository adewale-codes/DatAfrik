import React from 'react'

const Footer = () => {
  return (
    <div className='px-5 md:px-24'>
        <div className='flex items-center justify-center py-10 md:py-28'>
            <div className='flex gap-10 md:flex-row flex-col items-center md:items-start text-white pb-5 md:pb-20'>
                <div className='p-5'>
                    <ul>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl pb-2'>Ipsum</li>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl pb-2'>Ipsum</li>
                        <li className='font-bold text-xl'>Lorem</li>
                        <li className='font-light text-xl'>Ipsum</li>
                        <li className='font-light text-xl'>Ipsum</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center'>
            <div className='flex gap-2 items-center py-4'>
                <img src="/assets/copyright.svg" alt='copyright-icon' />
                <p className='font-light text-xl text-white'>2024</p>
            </div>
        </div>
    </div>
  )
}

export default Footer