// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import patientReducer from './slices/patientSlice';

const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
