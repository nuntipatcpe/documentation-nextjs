# Redux Toolkit

## Get started

- pnpm

```
pnpm install @reduxjs/toolkit
```

- Chome Extenion [install](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=th)

## Folder Structure

```
|-store
|   |-slices
|       |-cartSlice.js
|   |-store.js
```

---

## Store

- create **store.js**

import **configureStore**

```
import {configureStore}from '@reduxjs/toolkit'
```

import **cartSlice**

```
import cartReducer from './slices/cartSlice'
```
```
const store = configureStore({
    reducer :{
      cart: cartReducer
    }
  })

export default store
```

---

## Slice 

- create **cartSlice.js**

```
import { createSlice } from "@reduxjs/toolkit";
```
create initialState

```
const initialState = [];
```
create reducers ans action

```
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
     
    },
});

```

export action

```
export const { addToCart} = cartSlice.actions;

```

export default

```
export default cartSlice.reducer;
```

---

## Usage

- **Main.js**

import store  from ../store/store/ 

```
import store from './store/store';
```

```
import{Provider}from 'react-redux';
```
send store through provider

```
<Provider store={store}>
    <App />
</Provider>
```

- **Component.js**

import action **addToCart** from ../store/slices/ 

```
import { addToCart } from "../../../store/slices/cartSlice";
```

import **useDispatch**

```
import { useDispatch } from "react-redux";
```
```
const dispatch = useDispatch();
```
add data to state by dispatch()

```
dispatch(addToCart(data));
```
