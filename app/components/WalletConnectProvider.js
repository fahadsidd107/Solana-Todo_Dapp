import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {ConnectionProvider,WalletProvider} from '@solana/wallet-adapter-react';
import {WalletModalProvider} from "@solana/wallet-adapter-react-ui"
import { GlowWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from "@solana/web3.js";
import { useMemo } from "react";

export const WalletConnectionProvider = ({children})=>{

const network = WalletAdapterNetwork.Devnet

const endpoint = useMemo(()=>{
    if(network === WalletAdapterNetwork.Devnet){
        return 'https://rough-sly-night.solana-devnet.discover.quiknode.pro/48464c29d4e6fbd04197c7fb95fc376546601dcc/'
    }
    return clusterApiUrl(network)
},[network]) 

// @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(() => [new PhantomWalletAdapter(), new GlowWalletAdapter(), new SlopeWalletAdapter(), new SolflareWalletAdapter({ network }), new TorusWalletAdapter()], [network])


return(
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>{children}</WalletModalProvider>
        </WalletProvider>
    </ConnectionProvider>
)
}