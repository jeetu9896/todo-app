import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterTodo,
  markAllCompleted,
  markAllIncomplete,
} from "../../redux/action/actions";

const TodoFilter = () => {
  const currentFilter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = useCallback((e) => {
    dispatch(filterTodo(e.target.value));
  }, []);

  const handleMarkAllCompleted = useCallback(() => {
    dispatch(markAllCompleted());
  }, []);

  const handleMarkAllIncomplete = useCallback(() => {
    dispatch(markAllIncomplete());
  }, []);
  return (
    <div className="flex space-x-4 items-center">
      <select
        value={currentFilter}
        onChange={handleFilterChange}
        className="text-sm px-2 py-1 border-blue-300 focus: outline-none bg-white"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <button
        className="text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded "
        onClick={handleMarkAllCompleted}
      >
        Mark All Completed
      </button>
      <button
        className="text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded "
        onClick={handleMarkAllIncomplete}
      >
        Mark All Incomplete
      </button>
    </div>
  );
};

export default TodoFilter;
