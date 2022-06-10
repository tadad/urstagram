import type { AppProps } from 'next/app'
import { UrbitReactProvider } from 'context'
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UrbitReactProvider fakeZodMode={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UrbitReactProvider>
  )
}

export default MyApp
