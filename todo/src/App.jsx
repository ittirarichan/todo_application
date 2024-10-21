import React from 'react';
import TaskList from './Components/TaskList';
// import AddList from './Components/AddTask';

function App(){
    return (
        <div className="App">
            <h1>Todo App</h1>
            {/* <AddTask/> */}
            <TaskList/>
        </div>
    );
}

export default App;