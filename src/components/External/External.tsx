import { type ReactElement } from "react";
import { ExternalTable } from "./ExternalTable/ExternalTable";
import style from "./External.module.css";

const External = (): ReactElement => {
  return (
    <div className={style.page}>
      <ExternalTable />
    </div>
  );
};

export default External;


