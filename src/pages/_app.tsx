import Layout from '@/component/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../component/navbar.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
