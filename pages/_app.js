import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import Head from "next/head";
import { AuthProvider } from './Contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
    );
}

export default MyApp
