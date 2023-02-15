type TAppStoreValues = {
  isAppVisible: boolean;
};

type TAppStore = TAppStoreValues & {
  actions: {
    setAppVisible: (status: boolean) => void;
  };
};

export type {TAppStoreValues, TAppStore};
