import "./App.css";
import { fetchAllApi, initializeApi, updateApi } from "./api/api";
import { Msgs } from "./components/Msgs";
import { getContext, getProvider } from "./common/getProvider";

import { useState } from "react";

import { Program, web3 } from "@project-serum/anchor";
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
const { SystemProgram, Keypair } = web3;
const baseAccount = Keypair.generate();

function App() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");
  const wallet = useWallet();
  const [msgs, setMsgs] = useState([]);

  async function fetchAllCb() {
    const { provider, program } = await getContext({ wallet });
    //
    let allMsgs = await fetchAllApi({ provider, program, baseAccount });
    setMsgs(allMsgs);
    //
  }

  async function initialize() {
    const { provider, program } = await getContext({ wallet });
    //
    const account = await initializeApi({
      provider,
      program,
      baseAccount,
      SystemProgram,
    });
    setValue(account.field1.toString());
    //
  }

  async function update() {
    const { provider, program } = await getContext({ wallet });
    //
    const account = await updateApi({ input, provider, program, baseAccount });
    setValue(account.field1.toString());
    //
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
        <button onClick={fetchAllCb}>fetch</button>
        <div>
          {!value && <button onClick={initialize}>Initialize</button>}
          {value ? (
            <div>
              <h2>Current value: {value}</h2>
              <input
                placeholder="Add new data"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <button onClick={update}>Add data</button>
            </div>
          ) : (
            <h3>Please Inialize.</h3>
          )}
        </div>
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
