import { useMount } from 'ahooks';
import { useAppDispatch } from '@/lib/store/hooks';
import { initGame } from '@/lib/bootstrap/bootstrapSlice';
import { useEffect } from 'react';

export const useBootstrap = () => {
  console.log('useBootstrap');
  const dispatch = useAppDispatch();
  useMount(() => {
    console.log('dispatch(initGame())');
    dispatch(initGame());
  });
};
