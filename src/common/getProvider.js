import { Connection } from "@solana/web3.js";
import { AnchorProvider } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";

import { Program, web3 } from "@project-serum/anchor";

import idl from "../solana_twitter.json";

const opts = {
  preflightCommitment: "processed",
};

const programID = new PublicKey(idl.metadata.address);

const { SystemProgram, Keypair } = web3;

const baseAccount = Keypair.generate();

export const getProvider = async ({ wallet }) => {
  const network = "https://api.devnet.solana.com";
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
  return { provider, program, SystemProgram, baseAccount };
};
