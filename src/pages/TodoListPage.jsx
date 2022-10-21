import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/Todos/TodoList';
import AddTodo from '../components/Todos/AddTodo';

export default function TodoListPage() {
  const todos = useSelector((state) => state.todos);
  return (
    <section className="todolist_page">
      <AddTodo />
      <TodoList items={todos} />
    </section>
  );
}
