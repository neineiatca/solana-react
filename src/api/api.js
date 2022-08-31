export const initializeApi = async ({
  provider,
  program,
  baseAccount,
  SystemProgram,
}) => {
  try {
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
    console.log("account: ", account);
    //   setValue(account.field1.toString());

    // console.log(account);

    // setDataList(account.dataList);
  } catch (err) {
    console.log("Transaction error: ", err);
  }
};

export const updateApi = async ({ input, provider, program, baseAccount }) => {
  if (!input) return;

  await program.rpc.update(input, {
    accounts: {
      baseAccount: baseAccount.publicKey,
    },
  });

  const account = await program.account.baseAccount.fetch(
    baseAccount.publicKey
  );
  console.log("account: ", account);
  // setValue(account.data.toString());
  // setDataList(account.dataList);
  // setInput('');
};
