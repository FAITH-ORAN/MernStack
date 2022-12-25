import '../styles/globals.css'
import Layout from '../pages/components/nav/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
