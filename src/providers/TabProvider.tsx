import React, { useMemo } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { TabContext, TabContextProps } from '../contexts';

type Props = {
  children?: React.ReactNode;
};

export const TabProvider: React.FC<Props> = ({ children }) => {
  const index = useSharedValue(0);

  const data = useMemo<TabContextProps>(() => {
    return {
      index,
    };
  }, []);

  return <TabContext.Provider value={data}>{children}</TabContext.Provider>;
};
