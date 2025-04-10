import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";

const Todo = () => {
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-200 rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-blue-7000 uppercase">
        Todo List App
      </h2>
      <TodoInput />
      <TodoFilter />
    </div>
  );
};

export default Todo;
