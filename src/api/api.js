export const fetchAllApi = async ({ provider, program, baseAccount }) => {
  const msgs = await program.account.obj1.all();
  return msgs;
};

export const initializeApi = async ({
  provider,
  program,
  baseAccount,
  SystemProgram,
}) => {
  await program.rpc.createapi("abc", {
    accounts: {
      obj1: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  });

  const account = await program.account.obj1.fetch(baseAccount.publicKey);

  return account;
};

export const updateApi = async ({ provider, program, baseAccount, input }) => {
  if (!input) return;

  await program.rpc.updateapi(input, {
    accounts: {
      obj1: baseAccount.publicKey,
    },
  });

  const account = await program.account.obj1.fetch(baseAccount.publicKey);

  return account;
};
