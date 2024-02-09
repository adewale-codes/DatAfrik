import { MutableRefObject, forwardRef } from "react";

interface HomeProps {
    homeRef: MutableRefObject<HTMLElement | null>;
  }
  const Hero = forwardRef<HTMLDivElement, {}>((props, ref) =>{
  return (
    <div ref={ref}>
        <div className='h-[568px] bg-black w-full flex flex-col justify-center items-center'>
            <div className='flex items-center justify-center'>
                <div className='p-5 mt-6 md:max-w-[70%] max-w-[90%] font-extrabold text-center text-white font-bold text-3xl md:text-5xl'>It doesn&apos;t matter what <span className='text-primary-700'>JS Framework</span> you work with.</div>
            </div>
            <div>
                <div className='text-xl md:text-2xl text-center text-white'>Our boilerplates works with it <span className='text-secondary-400 font-bold'>out-of-the-box</span>. </div>
            </div>
            <div className='flex gap-5 pt-8'>
                <div>
                    <button className='bg-primary-700 py-2 px-3 rounded'>
                        <div className='flex gap-2'>
                            <p className='text-black text-sm md:text-base font-bold'>Get started</p>
                            <img src="/assets/arrow.svg" alt='arrow-icon' />
                        </div>
                    </button>
                </div>
                <div>
                    <button className='border-2 border-primary-700 py-2 px-3 rounded'>
                        <div className='flex gap-2'>
                            <p className='text-primary-700 text-sm md:text-base font-bold'>Get started</p>
                            <img src="/assets/github.svg" alt='github-icon' />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
})

export default Hero