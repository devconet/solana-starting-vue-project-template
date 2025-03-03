import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SolanaWallets from "solana-wallets-vue";

// You can either import the default styles or create your own.
import "solana-wallets-vue/styles.css";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";

import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";

const walletOptions = {
    wallets: [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter({ network: WalletAdapterNetwork.Devnet }),
    ],
    autoConnect: true,
  };

  const app = createApp(App);
  app.use(SolanaWallets, walletOptions);
  app.mount('#app');
