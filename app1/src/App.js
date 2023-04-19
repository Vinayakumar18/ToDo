import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from "./Components/Header";
import About from "./Components/About";
import { Todolist } from './Components/Todolist';
import { Footer } from "./Components/Footer";
import { useState,useEffect } from 'react';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const AddTodo=(title,desc)=>{
    let no;
    if(todos.length===0){
      no = 0;
    }
    else{
      no = todos[todos.length-1].no+1;
    }
    const myTodo = {
      no: no,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
  }
  const[todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
    <Router>
      <Header/>
      <Routes>
          <Route path="/" element={<Todolist todos={todos} onDelete={onDelete} AddTodo={AddTodo} />}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
