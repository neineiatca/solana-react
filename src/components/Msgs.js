import { useEffect, useState } from "react";

import { Msg } from "./Msg";
import { fetchAllApi } from "../api/api";
import { getContext } from "../common/getProvider";

export const Msgs = ({ wallet }) => {
  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    async function fetchAllCb() {
      const { provider, program, baseAccount, SystemProgram } = await getContext({
        wallet,
      });
      let allMsgs = await fetchAllApi({ provider, program, baseAccount });
      setMsgs(allMsgs);
    }

    (async function () {
      await fetchAllCb()
    })()
  }, [])

  return (
    <>
      {msgs.map((m, i) => {
        return <Msg key={i} txt={m.account.field1} />;
      })}
    </>
  );
};
