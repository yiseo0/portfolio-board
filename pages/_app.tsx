import ApolloSetting from '@/src/commons/apollo'
import Layout from '@/src/commons/layout'
import { GlobalStyles } from '@/src/commons/types/generated/styles/globalStyles'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {


  return (
    <ApolloSetting>
      <Global styles={GlobalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloSetting>
  )
}
