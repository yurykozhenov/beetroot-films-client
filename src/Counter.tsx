import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/storeTypes";

export default function Counter() {
  const count = useSelector((state: RootState) => state.value);
  const dispatch = useDispatch();

  // const [count, setCount] = useState(0);

  function increment() {
    // setCount((prevCount) => prevCount + 1);
    dispatch({ type: "counter/incremented" });
  }

  function decrement() {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: "counter/decremented" });
  }

  function reset() {
    // setCount(0);
    dispatch({ type: "counter/reset" });
  }

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={() => dispatch({ type: "counter/setTo", payload: 50 })}>
        Set to 50
      </button>
      <button onClick={() => dispatch({ type: "counter/setTo", payload: 42 })}>
        Set to 42
      </button>
      <button onClick={() => dispatch({ type: "counter/setTo", payload: 30 })}>
        Set to 30
      </button>
      <button onClick={() => dispatch({ type: "counter/setTo", payload: 15 })}>
        Set to 15
      </button>
    </>
  );
}
