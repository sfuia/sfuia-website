import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import { SSRProvider } from 'react-bootstrap';
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}

export default MyApp
