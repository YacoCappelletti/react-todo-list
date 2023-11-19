
import { useState } from 'react'
import {  ReactNode } from 'react';
import { TasksContext } from './TaskContext';


 

interface MyContextProps {
  children: ReactNode;
}
interface TasksContextProps {
  tasksState: number;
  setTasksState: React.Dispatch<React.SetStateAction<number>>;
}


const TasksProvider: React.FC<MyContextProps> = ({children}) => {

    const [tasksState, setTasksState] = useState<number>(1);

    const contextValue: TasksContextProps = {
      tasksState,
      setTasksState,
    };

  return (
    <TasksContext.Provider value={contextValue}>
       {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider