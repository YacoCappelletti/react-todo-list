import { createContext } from "react";

interface TasksContextProps {
    tasksState: number;
    setTasksState: React.Dispatch<React.SetStateAction<number>>;
}
  
const TasksContext =  createContext<TasksContextProps | undefined>(undefined);

export {TasksContext}