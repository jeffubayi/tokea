import Head from 'next/head';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../store';
import GlobalStyles from '../styles/GlobalStyles';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>
          TOKEA! - Discover great events and buy tickets or Host your own
          events.
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />

      <ToastContainer />
    </Provider>
  );
}
