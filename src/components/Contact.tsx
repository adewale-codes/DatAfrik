import React from 'react'

const Contact = () => {
  return (
    <div className='px-5 md:px-24 md:pt-24 md:pb-36'>
        <div>
            <div className='text-white font-bold text-2xl md:text-4xl'>Contact</div>
        </div>
        <div className='flex justify-center md:pt-6 items-center pt-5'>
            <div className='font-bold text-white'>Fill out this form to reach us.</div>
        </div>
        <div className='flex justify-center items-center pt-5'>
            <div>
                <form action="">
                    <div className='flex md:flex-row flex-col items-center md:items-start gap-2'>
                        <input type="text" placeholder='First name' className='h-10 w-64 bg-white p-2' required/>
                        <input type="text" placeholder='Last name' className='h-10 w-64 bg-white p-2' required/>
                    </div>
                    <div className='pt-5 md:pt-8'>
                        <input type="email" placeholder='Email' className='h-10 w-64 bg-white md:w-[520px] p-2' required/>
                    </div>
                    <div className='pt-5 md:pt-8'>
                        <input type="text" placeholder='Phone (optional)' className='h-10 w-64 bg-white md:w-[520px] p-2'/>
                    </div>
                    <div className='pt-5 md:pt-8'>
                        <textarea placeholder='Message' className='h-32 w-64 bg-white md:w-[520px] p-2' required/>
                    </div>
                    <div className='flex items-center justify-center pt-5'>
                        <button className='bg-secondary-400 font-bold text-2xl py-2 px-20' type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact