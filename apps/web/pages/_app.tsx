import { withAppEmotionCache } from 'ui/tss';
import { Providers } from '../components/providers';

//You can also pass your custom App if you have one.

const MyApp = ({ Component, pageProps, emotionCache }) => {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
};
export default withAppEmotionCache(MyApp);
