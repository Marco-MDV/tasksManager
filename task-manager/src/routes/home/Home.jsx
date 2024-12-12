import React, { useEffect, useState } from 'react'
import NotePad from '../../components/notepad/NotePad'
import AddTask from '../../components/addTask/AddTask'
export default function Home() {
  const [taskArr, setTaskArr] = useState([])
  const [newTask, setNewTask] = useState({state: 'newTaskCreate', tasks: ''});
  const [errorState, setErrorState] = useState(false)
  const checkTasks = () =>{if (localStorage.getItem('taskArr')) {setTaskArr(JSON.parse(localStorage.getItem('taskArr')))}else{setTaskArr([])}}
  const writeTask = (e) =>{setNewTask({...newTask, tasks:e.target.value});}
  const addTaskArr=()=>{
    if (newTask.tasks != '') {
      setErrorState(false)
      setTaskArr((prevTaskArr)=>{
        const updatedTasks = [...prevTaskArr, newTask];
        localStorage.setItem("taskArr", JSON.stringify(updatedTasks))
        return updatedTasks;
      })
      setNewTask({state: 'newTaskCreate', tasks: ''});
      document.querySelector('#inputField').value = '';
    }else{
      setErrorState(true)
    } 
  }

  useEffect(()=>{checkTasks()},[])
  
  return (
    <main className='min-h-displayMobile md:min-h-displayTablet&Desktop grid grid-cols-1 grid-rows-2 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-6'>
      <NotePad tasks={taskArr} taskArr={taskArr} setTaskArr={setTaskArr}/>
      <AddTask writeTask={writeTask} addTask={addTaskArr}/>
    </main>
  )
}
