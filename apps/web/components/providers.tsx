import { Provider } from 'react-redux';
import { NextAppDirEmotionCacheProvider } from 'styles';
import { store } from '../store';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <Provider store={store}>{children}</Provider>;
    </NextAppDirEmotionCacheProvider>
  );
};
