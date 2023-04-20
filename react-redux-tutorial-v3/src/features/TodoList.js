import React, { useState } from "react";
import { FaTrash, FaUpload } from "react-icons/fa";
import {
    useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation
} from "./api/apiSlice";

const TodoList = () => {
    // States, references
    const [newTodo, setNewTodo] = useState("");

    // Redux RTK query
    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetTodosQuery();
    const [addTodo] = useAddTodoMutation();
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    // Method to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Add new todo, then clear state
        addTodo({ userId: 1, title: newTodo, completed: false });
        setNewTodo("");
    }

    return (
        <main>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="new-todo">Enter a new todo item</label>
                <div className="new-todo">
                    <input
                        type="text"
                        id="new-todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Enter new todo"
                    />
                </div>
                <button className="submit">
                    <FaUpload />
                </button>
            </form>
            {isLoading && <p>Loading...</p>}
            {isSuccess && todos.map((todo) => { // JSON.stringify(todos)
                return (
                    <article key={todo.id}>
                        <div className="todo">
                            <input
                                type="checkbox"
                                id={todo.id}
                                checked={todo.completed}
                                onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
                            />
                            <label htmlFor={todo.id}>{todo.title}</label>
                        </div>
                        <button
                            className="trash"
                            onClick={() => deleteTodo({ id: todo.id })}>
                            <FaTrash />
                        </button>
                    </article>
                )
            })}
            {isError && <p>{error}</p>}
        </main>
    )
}

export default TodoList