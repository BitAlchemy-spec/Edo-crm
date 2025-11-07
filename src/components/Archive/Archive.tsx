import { type ReactElement } from "react";
import { ArchiveTable } from "./ArchiveTable/ArchiveTable";
import style from "./Archive.module.css";

const Archive = (): ReactElement => {
  return (
    <div className={style.page}>
      <ArchiveTable />
    </div>
  );
};

export default Archive;

