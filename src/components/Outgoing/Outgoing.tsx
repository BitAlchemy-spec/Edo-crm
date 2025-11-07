import { type ReactElement } from "react";
import { OutgoingTable } from "./OutgoingTable/OutgoingTable";
import style from "./Outgoing.module.css";

const Outgoing = (): ReactElement => {
  return (
    <div className={style.page}>
      <OutgoingTable />
    </div>
  );
};

export default Outgoing;

