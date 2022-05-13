import './App.css';
import React from "react";
import TaskList from './Components/TaskList/TaskList';
import Add from './Components/Add/Add';
import {tasks} from './data'


function App() {
//console.log(tasks);
const getTask =(x) => {
  console.log(x)
  console.log({desc :x , id:3 , isDone:false})

}
  return (
    <div className="App">
      <Add getTask={getTask} />
      <TaskList list= {tasks}  />
    </div>

  );
}

export default App;

