import { configureStore } from "@reduxjs/toolkit";
import gettingReducer from './slices/valueSlice';


const store = configureStore({
  reducer: {

    getting: gettingReducer,

  },
});

export default store;
