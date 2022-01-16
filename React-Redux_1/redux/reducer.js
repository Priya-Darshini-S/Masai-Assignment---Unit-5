export const reducer = (state, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return { todo: [...state.todo, payload] };
      case "TOGGLE_TODO":
        return {
          todo: state.todo.map((item) =>
            item.title === payload ? { ...item, status: !item.status } : item
          ),
        };
      case "REMOVE_TODO":
        return {
          todo: state.todo.filter((item) =>
            item.title !== payload ? true : false
          ),
        };
      default:
        return state;
    }
  };
  