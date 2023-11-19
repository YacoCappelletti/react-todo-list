import { TasksContext } from '../context/TaskContext';
import { useContext} from 'react';


const Task = ({task, done, id}:any) => {
  const {tasksState,setTasksState}:any = useContext(TasksContext);


  const handleClick = ()=>{
    
    const doneTask = {
      id: id,
      task: task,
      done: true
    }

    localStorage.setItem(`${id}`, JSON.stringify(doneTask));
    setTasksState(tasksState +1);
  }

  const undo = () =>{
    const pendingTask = {
      id: id,
      task: task,
      done: false
    }

    localStorage.setItem(`${id}`, JSON.stringify(pendingTask));
    setTasksState(tasksState +1);
  }

  const deleteTask = () =>{
  
      localStorage.removeItem(`${id}`);
      setTasksState(tasksState +1);
  }

    
  return (
    <div className="flex items-center  justify-between w-[95%] bg-gray-500 border border-solid border-gray-500 h-[3rem] text-[1.2rem] my-[.2rem]  ">
      
        <p className={`   truncate    ${done? 'line-through ms-[.5rem] text-black' : 'text-center w-[100%] text-white'}` } onClick={handleClick}>{task}</p>
      
        {done
        ? 
          <div className=" ms-[.5rem] flex space-x-[.5rem] me-[.5rem]">
            <button className='text-amber-500 font-bold' onClick={undo} >Undo</button>
            <button className='text-red-500 font-bold' onClick={deleteTask}>Delete</button>
          </div>
        : 
        ""
        }
        
    </div>
  )
}

export default Task