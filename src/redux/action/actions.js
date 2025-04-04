import {
  ADD_TODO,
  FILTER_TODO,
  MARK_ALL_COMPLETED,
  MARK_ALL_INCOMPLETE,
  MARK_COMPLETE_TODO,
  MARK_INCOMPLETE_TODO,
  REMOVE_TODO,
  SEARCH_TODO,
  TOGGLE_TODO,
} from "./actionTypes";

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    data: todo,
  };
};
export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    data: id,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    data: id,
  };
};
export const filterTodo = (filter) => {
  return {
    type: FILTER_TODO,
    data: filter,
  };
};
export const markCompleteTodo = (id) => {
  return {
    type: MARK_COMPLETE_TODO,
    data: id,
  };
};
export const markIncompleteTodo = (id) => {
  return {
    type: MARK_INCOMPLETE_TODO,
    data: id,
  };
};
export const markAllCompleted = () => {
  return {
    type: MARK_ALL_COMPLETED,
  };
};
export const markAllIncomplete = () => {
  return {
    type: MARK_ALL_INCOMPLETE,
  };
};
export const searchTodo = (searchTerm) => {
  return {
    type: SEARCH_TODO,
    data: searchTerm,
  };
};
