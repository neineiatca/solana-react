import { Msg } from "./Msg";

export const Msgs = ({ msgs }) => {
  return msgs.map((m, i) => {
    return <Msg key={i} txt={m.account.field1} />;
  });
};
