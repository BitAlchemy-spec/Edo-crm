import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faFileExport,
  faFileAlt,
  faFolder,
  faFile,
  faShapes,
  faAddressBook,
  faBuilding,
  faMoneyBill,
  faQuestionCircle,
  faFileSignature,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import { Title, Tooltip, UnstyledButton } from "@mantine/core";
import styles from "./Sidebar.module.css"; // Импортируем CSS Modules

/* ==============================
   Ссылки в боковой панели
   ============================== */
const mainLinksData = [
  { icon: faHome, label: "Головна", to: "/dashboard" },
];

const linksData = [
  { label: "Зовнішні документи", icon: faFileSignature, to: "external" },
  { label: "Вхідні документи", icon: faFileImport, to: "incoming" },
  { label: "Вихідні документи", icon: faFileExport, to: "outgoing" },
  { label: "Внутрішні документи", icon: faFileAlt, to: "internal" },
  { label: "Архів", icon: faFolder, to: "archive" },
  { label: "Чернетки", icon: faFile, to: "drafts" },
  { label: "Шаблони", icon: faShapes, to: "templates" },
  { label: "Контакти контрагентів", icon: faAddressBook, to: "contacts" },
  { label: "Налаштування компанії", icon: faBuilding, to: "company" },
  { label: "Тарифи", icon: faMoneyBill, to: "pricing" },
  { label: "Корисне", icon: faQuestionCircle, to: "help" },
];

function Sidebar() {
  const [active, setActive] = useState("Головна"); 

  // ==== верхние иконки ====
  const mainLinks = mainLinksData.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionProps={{ duration: 0 }}
      key={link.label}
    > 
      <UnstyledButton
        onClick={() => setActive(link.label)}
        data-active={link.label === active ? "true" : undefined}
        className={styles.mainLink}
      >
        <NavLink
          to={link.to}
          className={({ isActive }) => (isActive ? styles.activeNavLink : "")}
        >
          <h2>ЕДО</h2>
        </NavLink>
      </UnstyledButton>
    </Tooltip>
  ));

  // ==== боковые ссылки ====
  const links = linksData.map((link) => (
    <NavLink
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
      to={link.to}
      key={link.label}
    >
      <FontAwesomeIcon icon={link.icon} className={styles.icon} />
      <span>{link.label}</span>
    </NavLink>
  ));

  return (
    <div className={styles.layout}>
      {/* Левая панель */}
      <nav className={styles.navbar}>
        <div className={styles.wrapper}>
          <div className={styles.aside}>
            {mainLinks}
            {/* Если нужно, чтобы "Настройки" были в самом низу "aside", 
                можно добавить их сюда, например, с другим классом 
                или обернуть в отдельный flex-контейнер с justify-content: space-between */}
          </div>

          <div className={styles.main}>
            {/* Здесь используем active состояние для заголовка */}
            <Title order={4} className={styles.title}>
              {active}
            </Title>
            {links}
          </div>
        </div>
      </nav>

      {/* Контент справа */}
      <main className={styles.content}>
        <Outlet /> {/* здесь будут рендериться страницы */}
      </main>
    </div>
  );
}

export default Sidebar;




