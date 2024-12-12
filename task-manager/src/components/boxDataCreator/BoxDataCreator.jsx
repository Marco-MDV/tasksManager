import React from 'react'

export default function BoxDataCreator({name, link, icon}) {
  return (
    <div className='flex justify-center items-center gap-4 rounded-md border-2 border-slate-50 backdrop-blur-xl text-sm p-1 md:p-2 md:text-2xl hover:bg-zinc-200 hover:text-black duration-200'>
        <a href={link}>{name}</a>
        <p>{icon}</p>
    </div>
  )
}
