import { Body } from 'node-fetch';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
    </>
  )
}
