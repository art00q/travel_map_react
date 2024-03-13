import { configureStore } from "@reduxjs/toolkit";
import coordinatesReducer from "./reducers";
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: coordinatesReducer,
  middleware: [thunk],
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CardInterface = ReturnType<typeof store.getState.places>;
