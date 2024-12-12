export default function AddTask({writeTask, addTask}) {
  
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-2 md:row-start-2 md:col-start-2 md:col-end-6 lg:col-start-3 lg:col-end-5'>
      <div className="flex flex-col justify-center items-center gap-8 backdrop-blur-xl bg-white/30 py-2 rounded-md w-full">
        <h2 className='text-3xl font-bold'>Write yuor task!</h2>
        <div className='flex flex-col md:flex-row gap-2 w-full p-4 '>
          <input type="text" className='rounded-md w-full text-black p-2' onChange={writeTask} id="inputField"/>
          <button type="submit" className='border-2 rounded-md  p-2 active:bg-zinc-200 hover:bg-zinc-400 active:text-black duration-200 flex justify-center ' onClick={addTask}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
