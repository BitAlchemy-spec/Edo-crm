import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import styles from './AuthForm.module.css';
import logo from '../../assets/logo.svg';

// === TYPES ===
type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type LoginFormInputs = {
  email: string;
  password: string;
};

const AuthForm: React.FC = () => {
  const navigate = useNavigate();

  // === UI STATES ===
  const [activeTab, setActiveTab] = useState<'register' | 'login'>('login');

  // === REGISTER FORM ===
  const {
    register,
    handleSubmit,
    reset: resetRegister,
    watch: watchRegister,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormInputs>();

  // === LOGIN FORM ===
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    reset: resetLogin,
    watch: watchLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginFormInputs>();

  // === WATCHERS ===
  const registerEmail = watchRegister('email', '');
  const registerUsername = watchRegister('username', '');
  const registerPassword = watchRegister('password', '');
  const registerConfirmPassword = watchRegister('confirmPassword', '');

  const loginEmail = watchLogin('email', '');
  const loginPassword = watchLogin('password', '');

  // === HANDLERS ===
  const onRegister = (data: RegisterFormInputs) => {
    console.log('Регистрация:', data);
    resetRegister();
  };

  const onLogin = (data: LoginFormInputs) => {
    console.log('Вход:', data);
    navigate('/external');
    resetLogin();
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.auth}>
        <div className={styles.auth__card}>
          
          {/* === LOGO === */}
          <div className={styles.logoContainer}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.logoText}>
              <h2 className={styles.brandName}>EDO</h2>
              <p className={styles.brandDesc}>Електронний документообіг</p>
            </div>
          </div>

          {/* === TABS === */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'register' ? styles.active : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Регистрация
            </button>

            <button
              className={`${styles.tab} ${activeTab === 'login' ? styles.active : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Вход
            </button>
          </div>

          {/* === REGISTER FORM === */}
          {activeTab === 'register' && (
            <form className={styles.form} onSubmit={handleSubmit(onRegister)}>
              
              {/* Username */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faUser} className={styles.labelIcon} />
                  Имя пользователя:
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.form__input}
                    placeholder="Введите имя:"
                    {...register('username', { required: 'Введите имя пользователя:' })}
                  />
                </div>

                {registerErrors.username && (
                  <p className={styles.form__error}>{registerErrors.username.message}</p>
                )}
              </div>

              {/* Email */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.labelIcon} />
                  Email:
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    className={styles.form__input}
                    placeholder="Введите email"
                    {...register('email', {
                      required: 'Введите email:',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Некорректный формат email',
                      },
                    })}
                  />
                </div>

                {registerErrors.email && (
                  <p className={styles.form__error}>{registerErrors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Пароль:
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    className={styles.form__input}
                    placeholder="Введите пароль:"
                    {...register('password', {
                      required: 'Введите пароль',
                      minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' },
                    })}
                  />
                </div>

                {registerErrors.password && (
                  <p className={styles.form__error}>{registerErrors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Повторите пароль:
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    className={styles.form__input}
                    placeholder="Повторите пароль:"
                    {...register('confirmPassword', {
                      required: 'Подтвердите пароль',
                      validate: (value) =>
                        value === registerPassword || 'Пароли не совпадают',
                    })}
                  />
                </div>

                {registerErrors.confirmPassword && (
                  <p className={styles.form__error}>{registerErrors.confirmPassword.message}</p>
                )}
              </div>

              <button type="submit" className={styles.form__button}>
                Зарегистрироваться
              </button>
            </form>
          )}

          {/* === LOGIN FORM === */}
          {activeTab === 'login' && (
            <form className={styles.form} onSubmit={handleLoginSubmit(onLogin)}>
              
              {/* Email */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.labelIcon} />
                  Email
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    className={styles.form__input}
                    placeholder="Введите email:"
                    {...loginRegister('email', {
                      required: 'Введите email',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Некорректный формат email',
                      },
                    })}
                  />
                </div>

                {loginErrors.email && (
                  <p className={styles.form__error}>{loginErrors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Пароль
                </label>

                <div className={styles.inputWrapper}>
                  <input
                    type="password"
                    className={styles.form__input}
                    placeholder="Введите пароль:"
                    {...loginRegister('password', {
                      required: 'Введите пароль',
                      minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' },
                    })}
                  />
                </div>

                {loginErrors.password && (
                  <p className={styles.form__error}>{loginErrors.password.message}</p>
                )}
              </div>

              <button type="submit" className={styles.form__button}>
                Войти
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default AuthForm;

