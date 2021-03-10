import Layout from '../components/layout'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
      <Layout>
      <Component {...pageProps} />
      </Layout>
  )
}
