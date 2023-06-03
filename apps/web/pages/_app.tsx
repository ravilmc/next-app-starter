import { withAppEmotionCache } from 'styles';

//You can also pass your custom App if you have one.

const MyApp = ({ Component, pageProps, emotionCache }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
};
export default withAppEmotionCache(MyApp);
