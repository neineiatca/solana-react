import { Connection } from "@solana/web3.js";

import { AnchorProvider } from "@project-serum/anchor";

const opts = {
  preflightCommitment: "processed",
};

export const getProvider = async ({ wallet }) => {
  const network = "http://127.0.0.1:8899";
  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(
    connection,
    wallet,
    opts.preflightCommitment
  );
  return provider;
};
