import { RootState } from '@/redux/store';
import { BotListDataT } from '@/types/botlist';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: { botListData: BotListDataT[] } = { botListData: [] };

export const botSlice = createSlice({
  name: 'botList',
  initialState,
  reducers: {
    SET_BOT_LIST_DATA: (state, action: PayloadAction<BotListDataT[]>) => {
      return {
        ...state,
        botListData: action.payload
      };
    }
  }
});
export const { SET_BOT_LIST_DATA } = botSlice.actions;

export const BOT_LIST_DATA = (state: RootState) => state.reduxRoot.botList;
