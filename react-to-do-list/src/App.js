
import './App.css';
import React, { useState } from "react"
import Modal from "./component/modal"


function App() {

  const init = {
    id: "",
    task: "",
    type: 0,
    isImportant: false,
    isDone: false,
  };

  const [taskObj, setTaskObj] = useState(init)
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [doneTotal, setDoneTotal] = useState(0);

  const addTask = () => {
    console.log("add");


    
    const newObj = {
      id: tasks.length,
      title: task,
      isDone: false,
    };
    console.log(newObj.id)

    const newArr = [...tasks];

    newArr.push(newObj);

    setTasks(newArr)

    setTask("");
  };

  const dltBtn = (id) => {

    console.log(id);

     const newAr = tasks.filter((del)=>del.id !== id )

     setTasks(newAr)
  }

  const onDoneTask = (id) => {
    const objList = tasks.map((val) => {
      if (val.id === id) {

        val.isDone = !val.isDone;

        if (val.isDone) {
          setDoneTotal(doneTotal + 1);
        } else {
          setDoneTotal(doneTotal - 1);
        }
      }
      return val;
    });

    setTasks(objList);

  }

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-4">
          <h1>Todo List</h1>
          Total {tasks.length}
          <p>Checked Task {doneTotal}</p>
          <div className="d-flex gap-3">
            <input

              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder='task oruulna uu'
            />
            <button className='btn btn-primary' onClick={addTask}>
              Add
            </button>
            <Modal setTaskObj={setTaskObj}/>
          </div>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-4'>
          {
            tasks.map((e) => (
              <div className='d-flex justtify-content-between align-items-center'>
                <div className="d-flex">
                  <input type="checkbox" checked={e.isDone} onChange={() => onDoneTask(e.id)} />
                  <h4>{e.title}</h4>
                </div>
                <div>
                  <button className="btn btn-warning" >Edit</button>
                  <button className="btn btn-danger" onClick={() => (
                    dltBtn(e.id)
                  )}>Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
