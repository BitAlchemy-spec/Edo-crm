/**
 * Компонент боковой панели навигации
 * Предоставляет основную навигацию по разделам приложения
 */
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileImport,
  faFileExport,
  faFileAlt,
  faMoneyBill,
  faFileSignature,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip, UnstyledButton } from "@mantine/core";

import Header from "./../MobileMenu/MobileMenu";
import logo from "./../../assets/logo.svg";
import styles from "./Sidebar.module.css";

/**
 * Конфигурация пунктов навигации
 * Определяет структуру меню с иконками и маршрутами
 */
const linksData = [
  { label: "Зовнішні документи", icon: faFileSignature, to: "external" },
  { label: "Вхідні документи", icon: faFileImport, to: "incoming" },
  { label: "Вихідні документи", icon: faFileExport, to: "outgoing" },
  { label: "Внутрішні документи", icon: faFileAlt, to: "internal" },
  { label: "Тарифи", icon: faMoneyBill, to: "help" },
];

/**
 * Компонент Sidebar
 * Отображает боковую панель навигации с возможностью сворачивания
 */
function Sidebar() {
  // Состояние для управления сворачиванием/разворачиванием сайдбара
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Генерация ссылок навигации на основе конфигурации
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
      <nav className={`${styles.navbar} ${isCollapsed ? styles.collapsed : ""}`}>
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
          {/* Логотип и название приложения */}
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.logoText}>
              <h2>EDO</h2>
              <p>Електронний документообіг</p>
            </div>
          </div>

          {/* Основное меню навигации */}
          <div className={styles.main}>{links}</div>
        </div>
      </nav>

      {/* Основная область контента */}
      <main className={styles.content}>
        <Header />
        <div className={styles.contentWrapper}>
          {/* Outlet для рендеринга дочерних маршрутов */}
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Sidebar;

