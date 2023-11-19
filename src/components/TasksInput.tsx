import { useContext, useState } from 'react';
import { TasksContext } from '../context/TaskContext';


const TasksInput = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const {tasksState,setTasksState}:any = useContext(TasksContext);

  const handleSubmit = (e:any)=>{
      
      e.preventDefault();
      const formData = new FormData(e.target);
      

      const currentDate = new Date();
      const currentTimeInMilliseconds = currentDate.getTime();


      const task = {
        id: currentTimeInMilliseconds,
        task: formData.get('task'),
        done: false
      }


    



      localStorage.setItem(`${task.id}`, JSON.stringify(task));

      setTasksState(tasksState +1);
      setInputValue('');

  }

  return (
    <div className='flex justify-center w-[100%] pt-[2rem] '>
        <form  className='w-[100%] flex justify-center ' onSubmit={handleSubmit}>
            <input
              name='task'
              className='w-[80%] text-center text-black text-[2rem] border-solid border-2 h-[3rem] opacity-[.7]' 
              type="text" placeholder='Write your task here....' 
              value = {inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              >
              </input>
            <input type="submit" value='Add Task' className='border-solid border-2 w-[5rem] bg-slate-400 opacity-[.8] font-semibold'/>
        </form>
    </div>
  )
}

export default TasksInput