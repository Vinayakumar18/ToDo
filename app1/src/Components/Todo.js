import React from 'react'

export const Todo = ({ todos, onDelete }) => {
  let mystyle = {
    height: "3px",
    color: "#49e0ff"
  }
  return (
    <div className='container'>
      <br></br>
      <h4>{todos.title}</h4>
      <p>{todos.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todos);
        }}
      >
        Delete
      </button>
      <hr style={mystyle}/>
    </div>
  );
}
