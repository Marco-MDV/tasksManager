import React from 'react'
import ElementRow from './elementRow/ElementRow'

export default function NotePad({ tasks, taskArr, setTaskArr }) {

  return (
    <div className='w-full h-full flex justify-center items-center p-4 pt-8 md:col-start-2 md:col-end-6 lg:col-start-3 lg:col-end-7 xl:col-end-5 '>
      <div className='w-full bg-amber-200 p-3 rounded-lg duration-200'>
        {tasks.length != 0 ?
          <div className='bg-white text-black text-xl w-full rounded animation-200 overflow-y-auto h-96 break-words shadow-2xl'>
            {tasks.map((task, index) => (<ElementRow key={index} index={index} task={task} setTaskArr={setTaskArr} taskArr={taskArr} />))}
          </div>
          :
          <div className='bg-white text-black text-xl w-full rounded animation-200 overflow-y-auto h-96 break-words flex justify-center items-center shadow-2xl'>
            <p className='text-8xl font-bold'>Write a <br /> task</p>
          </div>
        }
      </div>
    </div>
  )
}
