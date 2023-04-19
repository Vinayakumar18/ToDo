import React from 'react'
import { Todo } from "../Components/Todo";
import { Add } from "../Components/Add";
export const Todolist = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">My ToDo List</h3>
      <Add AddTodo={props.AddTodo} />
      {props.todos.length === 0 ? (
        <h3>
          <hr />
          No ToDos to display
        </h3>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <Todo todos={todo} key={todo.no} onDelete={props.onDelete} />
            </>
          );
        })
      )}
    </div>
  );
}
