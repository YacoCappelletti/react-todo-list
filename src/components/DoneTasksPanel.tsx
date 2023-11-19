import { getAllLocalStorageData } from '../helpers/getAllLocalStorageData';
import Task from './Task';
import { useContext, useEffect } from 'react';
import { TasksContext } from '../context/TaskContext';

const DoneTasksPanel = () => {

  const tasks = getAllLocalStorageData();

  const doneTasks  = tasks.filter((task)=> task.done == true);

  const {tasksState}:any = useContext(TasksContext);

  useEffect(()=>{

  },[tasksState]);

  return (
    <div className=' w-[50%%] max-w-[40%] h-[60vh]   grow opacity-[.55] bg-white '>
        <h2 className='font-semibold text-center mt-[.5rem] text-[2rem] text-black'>Complete Tasks</h2>


        <div className='flex flex-col justify-center items-center w-[100%] pt-[1rem] over'>
          { doneTasks.map((task)=>{
            <br />

            return <Task task = {task.task} done={task.done} id={task.id} key={task.id}></Task>
          })}
        </div>


    </div>
  )
}

export default DoneTasksPanel