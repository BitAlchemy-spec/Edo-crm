import type { ReactElement } from "react";
import styles from "./Page.module.css";

interface PageProps {
  name: string;
}

/* ==============================
   ============================== */
const Page = ({ name }: PageProps): ReactElement => {
  return (
    <div className={styles.page}>
      <h2 className={styles.page__title}>{name}</h2>
      <p className={styles.page__content}>Тут будет контент для сторінки "{name}"</p>
    </div>
  );
};

export default Page;
