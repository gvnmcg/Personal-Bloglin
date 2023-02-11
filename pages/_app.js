import Layout from '../components/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <title>Gavin McGuire</title>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
