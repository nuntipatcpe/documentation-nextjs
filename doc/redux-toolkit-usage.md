# usage

- main.tsx

  ```
  import { store } from "./store/store";
  ```

  ```
  import { Provider } from "react-redux";
  ```

  ```
  <Provider store={store}>
      <App />
  </Provider>
  ```

- Component.tsx

  ```
  import { useSelector } from "react-redux";
  ```

  ```
  import { sliceSelector, count, setCountAsync } from "./store/slices/slice";
  ```

  ```
  import { useAppDispatch } from "./store/store";
  ```

  Get Variable in State

  ```
  const reducer = useSelector(sliceSelector);
  ```

  Dispatch can use action in my slice

  ```
  const dispatch = useAppDispatch();
  ```

  ```
  return (
  <div>
    <h1>Asynchronous {reducer.number}</h1>
    <h1>Asynchronous {reducer.AsyncNumber}</h1>
    <button
        onClick={() => {
            dispatch(count(1));
            dispatch(setCountAsync(1));
        }}
        >
    Increase
    </button>
    <button
        onClick={() => {
            dispatch(count(-1));
            dispatch(setCountAsync(-1));
        }}
        >
    Increase
    </button>
  </div>
  )
  ```
