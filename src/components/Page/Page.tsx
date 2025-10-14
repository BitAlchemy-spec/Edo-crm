import { type ReactElement } from "react";
import styles from "./Page.module.css";
import { DocumentsTable } from "./Table/TableSelection";

/* ==============================
   Page Component
   ============================== */
const Page = (): ReactElement => {
  return (
    <div className={styles.page}>
      <DocumentsTable />
    </div>
  );
};

export default Page;


