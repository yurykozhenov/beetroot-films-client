import { createStore } from "redux";
import { counterReducer } from "./reducer";

export const store = createStore(counterReducer);

store.subscribe(() => {
  localStorage.setItem("countState", JSON.stringify(store.getState()));
  console.log(store.getState());
});

// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/decremented" });
