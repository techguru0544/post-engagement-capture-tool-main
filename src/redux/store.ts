import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiService } from '@services/api.service.ts';
import { appReducer } from './rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  devTools: import.meta.env.MODE === 'development',
  reducer: {
    reduxRoot: appReducer, // Used to store data in redux on each refresh, for now storing static json data
    [apiService.reducerPath]: apiService.reducer // RTK Query for APIs fetching and Caching
  },
  middleware: gdm =>
    gdm({
      serializableCheck: false
    }).concat(apiService.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
