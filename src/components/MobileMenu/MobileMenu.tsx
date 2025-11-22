/*
  Компонент: MobileMenu
  Описание: Мобильное выезжающее меню для узких экранов. Содержит навигационные элементы и переключение видимости.
  Props: прием/использование пропсов зависят от реализации компонента (обычно boolean для открытия/закрытия).
  Экспорт: дефолтный/именованный (смотрите ниже).
*/

import { useLocation, useNavigate } from 'react-router-dom';
import styles from './MobileMenu.module.css';

const MobileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Зовнішні документи', path: '/external' },
    { label: 'Вхідні документи', path: '/incoming' },
    { label: 'Вихідні документи', path: '/outgoing' },
    { label: 'Внутрішні документи', path: '/internal' },
  ];

  return (
    <nav className={styles['mobile-menu']}>
      <ul className={styles['mobile-menu__list']}>
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={index} className={styles['mobile-menu__item']}>
              <button
                onClick={() => navigate(item.path)}
                className={`${styles['mobile-menu__link']} ${
                  isActive ? styles['mobile-menu__link--active'] : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
