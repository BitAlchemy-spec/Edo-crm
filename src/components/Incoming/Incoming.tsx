import { type ReactElement } from "react";
import { IncomingTable } from "./IncomingTable/IncomingTable";
import style from "./Incoming.module.css";

const Incoming = (): ReactElement => {
  return (
    <div className={style.page}>
      <IncomingTable />
    </div>
  );
};

export default Incoming;

