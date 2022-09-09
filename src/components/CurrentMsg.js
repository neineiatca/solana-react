import { getContext } from "../common/getProvider";

import { initializeApi } from "../api/api";

export const CurrentMsg = ({ wallet, currentMsg, setCurrentMsg }) => {
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

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        backgroundColor: "red",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <p>current msg: {currentMsg}</p>
      <button onClick={initialize}>Initialize</button>
    </div>
  );
};
