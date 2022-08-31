export const initializeApi = async ({
  provider,
  program,
  baseAccount,
  SystemProgram,
}) => {
  // /* interact with the program via rpc */
  // await program.rpc.initialize('abc',  {
  //   accounts: {
  //     baseAccount: baseAccount.publicKey,
  //     user: provider.wallet.publicKey,
  //     systemProgram: SystemProgram.programId,
  //   },
  //   signers: [baseAccount]
  // });

  /* interact with the program via rpc */
  await program.rpc.createapi("abc", {
    accounts: {
      obj1: baseAccount.publicKey,
      user: provider.wallet.publicKey,
      systemProgram: SystemProgram.programId,
    },
    signers: [baseAccount],
  });

  const account = await program.account.obj1.fetch(baseAccount.publicKey);

  const abc = await program.account.obj1.all();
  console.log(abc);

  return account;
};

export const updateApi = async ({ input, provider, program, baseAccount }) => {
  if (!input) return;

  await program.rpc.updateapi(input, {
    accounts: {
      obj1: baseAccount.publicKey,
    },
  });

  const account = await program.account.obj1.fetch(baseAccount.publicKey);

  return account;
};
