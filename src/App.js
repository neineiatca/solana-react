import "./App.css";
import { AddNewMsg } from "./components/AddNewMsg";
import { CurrentMsg } from "./components/CurrentMsg";

import { Msgs } from "./components/Msgs";

import { useState } from "react";

import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  useWallet,
  WalletProvider,
  ConnectionProvider,
} from "@solana/wallet-adapter-react";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
require("@solana/wallet-adapter-react-ui/styles.css");

const wallets = [new PhantomWalletAdapter()];

function App() {
  const [currentMsg, setCurrentMsg] = useState("");

  const wallet = useWallet();

  if (!wallet.connected) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <WalletMultiButton />
      </div>
    );
  } else {
    return (
      <div className="App">
        {currentMsg === "" ? (
          <CurrentMsg
            wallet={wallet}
            currentMsg={currentMsg}
            setCurrentMsg={setCurrentMsg}
          />
        ) : (
          <AddNewMsg wallet={wallet} />
        )}
        <Msgs wallet={wallet} />
      </div>
    );
  }
}

const AppWithProvider = () => (
  <ConnectionProvider endpoint="http://127.0.0.1:8899">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <App />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
);

export default AppWithProvider;
