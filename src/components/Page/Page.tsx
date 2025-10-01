import type { ReactElement } from "react";
// import style from "./Page.module.css";

interface PageProps {
  name: string;
}

/* ==============================
   Универсальная заглушка страницы
   ============================== */
const Page = ({ name }: PageProps): ReactElement => {
  return (
    <div style={{ margin: "0px" + "auto" }}>
      <h2>{name}</h2>
      <p>Тут будет контент для сторінки "{name}"</p>
    </div>
  );
};

export default Page;
