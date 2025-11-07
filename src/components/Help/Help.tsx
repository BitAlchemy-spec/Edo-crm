import { type ReactElement } from "react";
import { HelpTable } from "./HelpTable/HelpTable";
import style from "./Help.module.css";

const Help = (): ReactElement => {
  return (
    <div className={style.page}>
      <HelpTable />
    </div>
  );
};

export default Help;

