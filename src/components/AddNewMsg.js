import { useState } from "react";

import { getContext } from "../common/getProvider";

import { updateApi } from "../api/api";

export const AddNewMsg = ({ wallet }) => {
  const [input, setInput] = useState("");

  async function update() {
    const { provider, program, baseAccount, SystemProgram } = await getContext({
      wallet,
    });
    const account = await updateApi({ input, provider, program, baseAccount });
    // setCurrentMsg(account.field1.toString());
  }

  return (
    <div>
      <input
        placeholder="Add new data"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button onClick={update}>Add data</button>
    </div>
  );
};
