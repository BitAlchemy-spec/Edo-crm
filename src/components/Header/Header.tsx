import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__list}>
            <li className={styles.header__item}>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                }
              >
                Главная
              </NavLink>
            </li>
            <li className={styles.header__item}>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `${styles.header__link} ${isActive ? styles.header__link_active : ''}`
                }
              >
                О нас
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
