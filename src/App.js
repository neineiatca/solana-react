import idl from "./solana_twitter.json";
import "./App.css";
import { initializeApi, updateApi } from "./api/api";

import { useState } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
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
const opts = {
  preflightCommitment: "processed",
};
const programID = new PublicKey(idl.metadata.address);

function App() {
  const [value, setValue] = useState("");
  const [dataList, setDataList] = useState([]);
  const [input, setInput] = useState("");
  const wallet = useWallet();

  async function getProvider() {
    /* create the provider and return it to the caller */
    /* network set to local network for now */
    const network = "http://127.0.0.1:8899";
    const connection = new Connection(network, opts.preflightCommitment);

    const provider = new AnchorProvider(
      connection,
      wallet,
      opts.preflightCommitment
    );
    return provider;
  }

  async function initialize() {
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);

    await initializeApi({ provider, program, baseAccount, SystemProgram });
  }

  async function update() {
    const provider = await getProvider();
    const program = new Program(idl, programID, provider);

    await updateApi({ input, provider, program, baseAccount });
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
          {dataList.map((d, i) => (
            <h4 key={i}>{d}</h4>
          ))}
        </div>
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
