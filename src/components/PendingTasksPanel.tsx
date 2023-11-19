import { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../context/TaskContext';
import { getAllLocalStorageData } from '../helpers/getAllLocalStorageData';
import Task from './Task';

const PendingTasksPanel = () => {

  const [ pendingTasks, setPendingTasks] = useState<any[]>(getAllLocalStorageData());
  const {tasksState}:any = useContext(TasksContext);

 
  useEffect(()=>{
    const tasks = getAllLocalStorageData();
    const filteredTasks = tasks.filter((task) => !task.done);
    setPendingTasks(filteredTasks);

  },[])

  useEffect(() => {
    const tasks = getAllLocalStorageData();
    const filteredTasks = tasks.filter((task) => !task.done);
    setPendingTasks(filteredTasks);
  }, [tasksState]);

  
  

  return (

    <div className='w-[25%] max-w-[40%] h-[60vh]   opacity-[.55] bg-white grow'>
        <h2 className='font-semibold text-center mt-[.5rem] text-[2rem] text-black'>Pending Tasks</h2>

        <div className='flex flex-col justify-center items-center w-[100%] pt-[1rem]'>
          { pendingTasks.map((task)=>{
            <br />

            return <Task task = {task.task} done={task.done} id={task.id} key={task.id}></Task>
          })}
        </div>
    </div>
  )
}

export default PendingTasksPanel