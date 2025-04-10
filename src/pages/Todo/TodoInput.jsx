import { useCallback, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/action/actions";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    setInputValue(e?.target?.value);
  }, []);
  const handleAddTodo = useCallback((addTodoText) => {
    dispatch(addTodo(addTodoText));
  }, []);
  const saveTodo = useCallback(() => {
    const todoValue = inputValue?.trim();
    if (todoValue === "") {
      return;
    } else {
      handleAddTodo(inputValue);
      setInputValue("");
    }
  }, [inputValue]);
  return (
    <div className="flex items-center mb-4">
      <input
        id="addTodo"
        name="text"
        type="text"
        className="flex-grow p-2 rounded border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-white"
        placeholder="Add a new task..."
        onChange={handleChange}
      />
      <button
        onClick={saveTodo}
        className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
      >
        <FaArrowAltCircleRight />
      </button>
    </div>
  );
};

export default TodoInput;
