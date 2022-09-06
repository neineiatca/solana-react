import "./App.css";
import { fetchAllApi, initializeApi } from "./api/api";
import { Msgs } from "./components/Msgs";
import { getContext } from "./common/getProvider";

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
import { AddNewMsg } from "./components/AddNewMsg";
require("@solana/wallet-adapter-react-ui/styles.css");

const wallets = [new PhantomWalletAdapter()];

function App() {
  const [currentMsg, setCurrentMsg] = useState("");

  const wallet = useWallet();
  const [msgs, setMsgs] = useState([]);

  async function fetchAllCb() {
    const { provider, program, baseAccount, SystemProgram } = await getContext({
      wallet,
    });
    let allMsgs = await fetchAllApi({ provider, program, baseAccount });
    setMsgs(allMsgs);
  }

  async function initialize() {
    const { provider, program, baseAccount, SystemProgram } = await getContext({
      wallet,
    });
    const account = await initializeApi({
      provider,
      program,
      baseAccount,
      SystemProgram,
    });
    setCurrentMsg(account.field1.toString());
  }

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
        <AddNewMsg wallet={wallet} />
        <button onClick={fetchAllCb}>fetch</button>
        <button onClick={initialize}>Initialize</button>
        <Msgs msgs={msgs} />
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
