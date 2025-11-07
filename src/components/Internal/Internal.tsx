import { type ReactElement } from "react";
import { InternalTable } from "./InternalTable/InternalTable";
import style from "./Internal.module.css";

const Internal = (): ReactElement => {
  return (
    <div className={style.page}>
      <InternalTable />
    </div>
  );
};

export default Internal;

