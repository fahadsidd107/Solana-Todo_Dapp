import Head from 'next/head'
import '../styles/global.css'
// Import WalletConnectionProvider from components
import { WalletConnectionProvider } from '../components/WalletConnectProvider'
// Import the solana wallet css
import '@solana/wallet-adapter-react-ui/styles.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Todo App</title>
            </Head>
            <main>
                {/* Wrap provider around App */}
                <WalletConnectionProvider>
                    <Component {...pageProps} />
                </WalletConnectionProvider>
            </main>
        </>
    )
}

export default MyApp
