import { Button, Grid } from '@mantine/core';
import BotCard from '@/components/cards/BotCard';
import { useAppDispatch, useAppSelector } from '@/redux/store';
import { useEffect } from 'react';
import {
  BOT_LIST_DATA,
  SET_BOT_LIST_DATA
} from '@/redux/reducers/bot-list/bot-list.slice';
import botListJsonData from '@/data/bot-list-data.json';

const BotList = () => {
  // ------ FYI: Just for the demo purposes only ("botListJsonData" can be directly used as imported) ---------
  const dispatch = useAppDispatch();
  const { botListData } = useAppSelector(BOT_LIST_DATA);
  useEffect(() => {
    dispatch(SET_BOT_LIST_DATA(botListJsonData));
  }, [dispatch]);
  // ---------- FYI: Just for the demo purposes only (Redux State Management with typescript) ------------

  return (
    <div className="p-4">
      <Button radius="xl" mb={24}>
        + Create Bot
      </Button>

      {botListData.length && (
        <Grid>
          {botListData.map((botData, index) => (
            <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={index}>
              <BotCard botData={botData} />
            </Grid.Col>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default BotList;
