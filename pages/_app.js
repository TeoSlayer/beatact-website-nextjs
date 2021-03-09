

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}
