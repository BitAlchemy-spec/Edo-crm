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
  faHome,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Text, Group, Tooltip, UnstyledButton } from "@mantine/core";

import styles from "./Sidebar.module.css"; // Импортируем CSS Modules

/* ============================
 * Конфигурация навигации
 * ============================ */
const mainLinksData = [
  { icon: faHome, label: "Головна", to: "/dashboard" },
];

/* ============================
 * Основное меню навигации
 * ============================ */
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

/* ============================
 * Основной компонент Sidebar
 * ============================ */
function Sidebar() {
  // Состояния компонента
  const [active, setActive] = useState("Головна");
  const [isCollapsed, setIsCollapsed] = useState(false);

  /* Рендер логотипа и главной навигации */
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
          <Group>
            <div className={styles.logoCircle}>
              <Text size="xl">
                ЕДО
              </Text>
            </div>
          </Group>
        </NavLink>
      </UnstyledButton>
    </Tooltip>
  ));

  /* Рендер боковых ссылок навигации */
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
      {/* Боковая панель навигации */}
      <nav className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ''}`}>
        {/* Кнопка сворачивания/разворачивания */}
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
          {/* Секция с логотипом */}
          <div className={styles.aside}>
            {mainLinks}
          </div>

          {/* Основное меню навигации */}
          <div className={styles.main}>
            {links}
          </div>
        </div>
      </nav>

      {/* Основной контент */}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}

export default Sidebar;




