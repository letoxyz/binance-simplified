import {create} from 'zustand';

import type {TAppStore, TAppStoreValues} from './types';

const initialState: Omit<TAppStoreValues, 'actions'> = {
  isAppVisible: true,
};

const useAppStore = create<TAppStore>()((set) => ({
  ...initialState,
  actions: {
    setAppVisible: (status): void => {
      set({isAppVisible: status});
    },
  },
}));

export {useAppStore};
