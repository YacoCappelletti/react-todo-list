import DoneTasksPanel from "./components/DoneTasksPanel"
import PendingTasksPanel from "./components/PendingTasksPanel"
import TasksInput from "./components/TasksInput"
import TasksProvider from "./context/TasksProvider"





function App() {

  
  
  return (
    
      <TasksProvider>
          <h1 className='text-center pt-[1rem] text-[5rem] text-white font-semibold'>Todo List</h1>
          <TasksInput/>
          <div className="flex pt-[2rem] justify-center w-[100%] space-x-[5rem]"> 
              <PendingTasksPanel/>

              <DoneTasksPanel/>
          </div>
      </TasksProvider>

  )
}

export default App
