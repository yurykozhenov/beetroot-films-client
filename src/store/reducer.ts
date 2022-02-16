import { RootState } from "./storeTypes";

const initialStateFromLocalStorage = localStorage.getItem("countState");

let initialState: RootState = { value: 0 };

try {
  initialState = initialStateFromLocalStorage
    ? JSON.parse(initialStateFromLocalStorage)
    : { value: 0 };
} catch {
  initialState = { value: 0 };
}

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    case "counter/reset":
      return { value: initialState.value };
    case "counter/setTo":
      return { value: action.payload };
    default:
      return state;
  }
}
