import React from 'react'
import { useNavigate } from 'react-router'

export default function ErrorPage() {
  const navigate = useNavigate()
  const handleClick = () => {navigate('/')}
  return (
    <main className='min-h-displayMobile md:min-h-displayTablet&Desktop flex justify-center items-center flex-col '>
      <h2 className='text-2xl md:text-4xl font-bold text-red-400'>Error 404 - Page Not Found</h2>
      <p className='text-normal md:text-2xl'>The page you're looking for doesn't exist.</p>
      <div className='flex justify-center items-end gap-3 text-normal md:text-2xl pt-2'>
        <p> please back to home.</p>
        <button className='border-2 p-2 rounded-md active:bg-zinc-200 hover:bg-zinc-400 active:text-black duration-200 ' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
          </svg>
        </button>
      </div>
    </main>
  )
}
