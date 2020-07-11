export const incrementCounter = () => {
    return {
      type: "Increment",
    };
  };
  
  export const decrementCounter = () => {
    return {
      type: "Decrement",
    };
  };
  
  export function incrementAsync() {
    return async (dispatch) => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&form=2020-06-03&sortBy=publishedAt&apiKey=5d44997c20084a3aa7b7a241cb93ef2a"
      );
      dispatch({
        type: "GET_DATA",
        payload: response.json(),
      });
      setTimeout(() => {
        dispatch(incrementCounter());
      }, 5000);
    };
  }
  
  export function decrementAsync() {
    return async (dispatch) => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=bitcoin&form=2020-06-03&sortBy=publishedAt&apiKey=5d44997c20084a3aa7b7a241cb93ef2a"
      );
      dispatch({
        type: "GET_DATA",
        payload: response.json(),
      });
      setTimeout(() => {
        dispatch(decrementCounter());
      }, 5000);
    };
  }
  