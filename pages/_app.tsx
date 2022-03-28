import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '../models';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App re-render');

  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
