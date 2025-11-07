import { type ReactElement } from "react";
import { DraftsTable } from "./DraftsTable/DraftsTable";
import style from "./Drafts.module.css";

const Drafts = (): ReactElement => {
  return (
    <div className={style.page}>
      <DraftsTable />
    </div>
  );
};

export default Drafts;

