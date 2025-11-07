import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './NotFound.module.css';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = (): void => {
    navigate('/');
  };

  const handleGoBack = (): void => {
    navigate(-1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Сторінку не знайдено</h1>
        <p className={styles.description}>
          Вибачте, але сторінка, яку ви шукаєте, не існує або була переміщена.
        </p>
        <div className={styles.actions}>
          <button onClick={handleGoBack} className={styles.button}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.buttonIcon} />
            Повернутися назад
          </button>
          <button onClick={handleGoHome} className={`${styles.button} ${styles.buttonPrimary}`}>
            <FontAwesomeIcon icon={faHome} className={styles.buttonIcon} />
            На головну
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

