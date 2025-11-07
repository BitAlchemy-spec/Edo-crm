import { type ReactElement } from "react";
import { TemplatesTable } from "./TemplatesTable/TemplatesTable";
import style from "./Templates.module.css";

const Templates = (): ReactElement => {
  return (
    <div className={style.page}>
      <TemplatesTable />
    </div>
  );
};

export default Templates;

