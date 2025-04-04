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
} from "../action/actionTypes";

const initialState = {
  todos: [],
  filter: "all",
  searchTerm: "",
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { todo: action.data, completed: false }],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.data),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.data) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      };

    case FILTER_TODO:
      return {
        ...state,
        filter: action.data,
      };

    case MARK_COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          todo.id === action.data ? { ...todo, completed: true } : todo;
        }),
      };

    case MARK_INCOMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.data ? { ...todo, completed: false } : todo
        ),
      };

    case MARK_ALL_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
      };

    case MARK_ALL_INCOMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) => ({ ...todo, completed: false })),
      };

    case SEARCH_TODO:
      return {
        ...state,
        searchTerm: action.data,
      };
    default:
      return state;
  }
};

export default todoReducer;
