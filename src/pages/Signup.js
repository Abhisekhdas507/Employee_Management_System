import React from 'react'
import SignupForm from '../components/SignupForm'
import man from '../assets/proffationalMan.png'

const Signup = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='flex bg-[#402E7A] rounded-xl p-5  gap-8'>
        <div className='flex flex-col bg-[#4C3BCF] rounded-xl justify-between p-6 w-[300px]'>
          <p className='text-[10px] font-bold text-[#65a2e9]'>START FOR FREE</p>

          <div>
            <h2 className='text-[#b3d0f6] text-4xl font-semibold'>Create a new <br /> account.</h2>
            <p className='text-[10px]  text-[#65a2e9] font-semibold'>
              It is a long established fact that a reader will be distracted by the readable <br /> content of a page when looking at its layout.
            </p>
          </div>

          <div>
            <div className='bg-[#312683] rounded-md flex flex-col p-3'>
              <p className='text-[10px] text-[#65a2e9]'>
                Signing up for this employee management was <br />
                the best decision I made in my life.
              </p>
              <div className='flex gap-2'>
                <div className='w-[30px] h-[30px] object-cover rounded-md overflow-hidden'>
                  <img src={man} loading='lazy' />
                </div>
                <div className='flex flex-col text-[#65a2e9] font-semibold' >
                  <p className='text-[12px] '>Jhon Cena</p>
                  <p className='text-[10px]'>WWE Wrestler and Actor</p>

                </div>

              </div>
            </div>
            <div className='flex items-center justify-center mt-2 gap-1'>
              <div className='bg-[#b3d0f6] h-[6px] w-[6px] rounded-full'></div>
              <div className='bg-[#84a2c9] h-[6px] w-[6px] rounded-full'></div>
              <div className='bg-[#84a2c9] h-[6px] w-[6px] rounded-full'></div>
            </div>

          </div>

        </div>
        <div >
          <SignupForm />
        </div>

      </div>
    </div>
  )
}

export default Signup