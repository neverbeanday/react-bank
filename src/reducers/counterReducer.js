const counterReducer = (state = 3, action) => {
    switch (action.type) {
      case "Increment":
        return (state = state + 1);
      case "Decrement":
        return (state = state - 1);
      default:
        return state;
    }
  };
  
  export default counterReducer;
  