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
  faFileSignature,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip, UnstyledButton } from "@mantine/core";

import Header from "../Header/Header";
import logo from "../../assets/logo.svg";
import styles from "./Sidebar.module.css";

/* Конфигурация навигации */
const linksData = [
  { label: "Зовнішні документи", icon: faFileSignature, to: "external" },
  { label: "Вхідні документи", icon: faFileImport, to: "incoming" },
  { label: "Вихідні документи", icon: faFileExport, to: "outgoing" },
  { label: "Внутрішні документи", icon: faFileAlt, to: "internal" },
  { label: "Архів", icon: faFolder, to: "archive" },
  { label: "Чернетки", icon: faFile, to: "drafts" },
  { label: "Шаблони", icon: faShapes, to: "templates" },
  { label: "Контакти контрагентів", icon: faAddressBook, to: "contacts" },
  { label: "Налаштування компанії", icon: faBuilding, to: "pricing" },
  { label: "Тарифи", icon: faMoneyBill, to: "help" },
];

/* Компонент Sidebar */
function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
      <nav className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ""}`}>
        <Tooltip
          label={isCollapsed ? "Розгорнути" : "Згорнути"}
          position="right"
          withArrow
        >
          <UnstyledButton
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={styles.collapseBtn}
          >
            <FontAwesomeIcon
              icon={isCollapsed ? faChevronRight : faChevronLeft}
              className={styles.collapseIcon}
            />
          </UnstyledButton>
        </Tooltip>

        <div className={styles.wrapper}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.logoText}>
              <h2>EDO</h2>
              <p>Електронний документообіг</p>
            </div>
          </div>

          <div className={styles.main}>{links}</div>
        </div>
      </nav>

      <main className={styles.content}>
        <Header />
        <div className={styles.contentWrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;

