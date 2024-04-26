import { botSlice } from './reducers/bot-list/bot-list.slice';
import { combineReducers } from '@reduxjs/toolkit';

// Combine all reducers.
export const appReducer = combineReducers({
  botList: botSlice.reducer
});
