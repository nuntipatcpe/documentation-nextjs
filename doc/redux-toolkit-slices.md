## Slices folder

- Synchronous

  ```
  const slice = createSlice({
  name: "counter1",
  initialState: initialValues,

  reducers: {
    //action_Synchronous
  },

  });
  ```

- Asynchronous

  Action Asynchronous

  ```
  export const setCountAsync = createAsyncThunk(
  "counter1/setValueAsync",
  async (value: number) => {

    //action_Asynchronous
    return value;
  }
  );
  ```

  Effect by Asynchronous

  ```
  const slice = createSlice({
  name: "counter1",
  initialState: initialValues,

  extraReducers: (builder) => {

    //Effect by action_Asynchronous

    builder.addCase(
      setCountAsync.fulfilled,
      (state: initialStateType, actions: PayloadAction) => {
        // success
      }
    );

    builder.addCase(
      setCountAsync.pending,
      (state: initialStateType, actions: PayloadAction) => {
        state.loading = true;
        // pending
      }
    );
  },
  });

  ```

## Example

**slice.ts**

1. Create AsyncThunk

2. Create Slice

3. Type PayloadAction


    ```
    import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
    import { RootState } from "../store";
    ```

---

- Custome type

  InitialState type

  ```
  type initialStateType = {
  number: number;
  AsyncNumber: number;
  loading: boolean;
  };
  ```

  payloadAction type

  ```
  type payloadActionType = {
  payload: number;
  };
  ```

---

- initialState

  ```
  const initialValues: initialStateType = {
    number: 0,
    AsyncNumber: 0,
    loading: false,
  };
  ```

- Action asynchronous

  ```
  export const setCountAsync = createAsyncThunk(
  "counter1/setValueAsync",
  async (value: number) => {

    const data = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(value);
      }, 1000);
    });

    return await data;
  }
  );
  ```
---

- Create Slice

  ```
  const slice = createSlice({
  name: "counter1",
  initialState: initialValues,
  reducers: {
    count: (state: initialStateType, actions: payloadActionType) => {
      state.number = state.number + actions.payload;
      if (state.number < 0) {
        state.number = state.number + 1;
      }
    },
    clear: (state: initialStateType, actions: payloadActionType) => {
      state.number = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      setCountAsync.fulfilled,
      (state: initialStateType, actions: payloadActionType) => {
        state.AsyncNumber = state.AsyncNumber + actions.payload;
        if (state.AsyncNumber < 0) {
          state.AsyncNumber = state.AsyncNumber + 1;
        }
        state.loading = false;
      }
    );

    builder.addCase(
      setCountAsync.pending,
      (state: initialStateType, actions: PayloadAction) => {
        state.loading = true;
      }
    );
  },
  });
  ```

---

1. Export actions
2. Add Type and export Reducer
3. Export slice

```
export const { count, clear } = slice.actions;
export const sliceSelector = (store: RootState) => store.sliceReducer;
export default slice.reducer;
```
