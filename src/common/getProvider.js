import { Connection } from "@solana/web3.js";
import { AnchorProvider } from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

import idl from "../solana_twitter.json";

const opts = {
  preflightCommitment: "processed",
};

const programID = new PublicKey(idl.metadata.address);

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

export const getContext = async ({ wallet }) => {
  const provider = await getProvider({ wallet });
  const program = new Program(idl, programID, provider);
  return { provider, program };
};
