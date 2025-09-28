import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
  faTimes,
  faEye,
  faEyeSlash,
} from '@fortawesome/free-solid-svg-icons';
import styles from './AuthForm.module.css';
import { useNavigate } from 'react-router-dom'; 

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

  const [activeTab, setActiveTab] = useState<'register' | 'login'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); 

  // === Register form ===
  const {
    register,
    handleSubmit,
    reset: resetRegister,
    setValue: setRegisterValue,
    watch: watchRegister,
    formState: { errors: registerErrors },
  } = useForm<RegisterFormInputs>();

  // === Login form ===
  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    reset: resetLogin,
    setValue: setLoginValue,
    watch: watchLogin,
    formState: { errors: loginErrors },
  } = useForm<LoginFormInputs>();

  // watchers
  const registerEmail = watchRegister('email', '');
  const loginEmail = watchLogin('email', '');
  const loginPassword = watchLogin('password', '');
  const registerUsername = watchRegister('username', '');
  const registerPassword = watchRegister('password', '');
  const registerConfirmPassword = watchRegister('confirmPassword', ''); // Watcher для подтверждения пароля

  const onRegister = (data: RegisterFormInputs) => {
    console.log('Регистрация:', data);
    // Здесь вы бы отправили данные на сервер
    // После успешной регистрации можно, например, переключиться на вкладку входа
    // или сразу перенаправить на дашборд, если регистрация подразумевает автоматический вход.
    // Для простоты примера, просто сбросим форму.
    resetRegister();
    // navigate('/dashboard'); // Пример перенаправления после регистрации
  };

  const onLogin = (data: LoginFormInputs) => {
    console.log('Вход:', data);
    // Здесь ваша логика аутентификации на сервере
    // Предположим, что вход прошел успешно
    const loginSuccess = true; // Замените на реальную проверку ответа сервера

    if (loginSuccess) {
      resetLogin(); // Сбросить форму после успешного входа
      navigate('/dashboard'); // Перенаправляем на дашборд
    } else {
      // Обработка ошибки входа (например, отображение сообщения об ошибке)
      console.log('Ошибка входа: неверные учетные данные');
    }
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.auth}>
        <div className={styles.auth__card}>
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
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faUser} className={styles.labelIcon} />
                  Имя пользователя:
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    className={styles.form__input}
                    placeholder="Введите имя"
                    {...register('username', { required: 'Введите имя пользователя' })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${
                      registerUsername ? styles.visible : styles.hidden
                    }`}
                    onClick={() => setRegisterValue('username', '')}
                  />
                </div>
                {registerErrors.username && (
                  <p className={styles.form__error}>{registerErrors.username.message}</p>
                )}
              </div>

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
                      required: 'Введите email',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Некорректный формат email',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${
                      registerEmail ? styles.visible : styles.hidden
                    }`}
                    onClick={() => setRegisterValue('email', '')}
                  />
                </div>
                {registerErrors.email && (
                  <p className={styles.form__error}>{registerErrors.email.message}</p>
                )}
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Пароль:
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={styles.form__input}
                    placeholder="Введите пароль"
                    {...register('password', {
                      required: 'Введите пароль',
                      minLength: {
                        value: 6,
                        message: 'Пароль должен быть не менее 6 символов',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${
                      registerPassword ? styles.visible : styles.hidden
                    }`}
                    onClick={() => setRegisterValue('password', '')}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className={styles.togglePasswordIcon}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                </div>
                {registerErrors.password && (
                  <p className={styles.form__error}>{registerErrors.password.message}</p>
                )}
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Повторите пароль:
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    className={styles.form__input}
                    placeholder="Повторите пароль"
                    {...register('confirmPassword', {
                      required: 'Пожалуйста, подтвердите пароль',
                      validate: (value) =>
                        value === watchRegister('password') || 'Пароли не совпадают',
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${
                      registerConfirmPassword ? styles.visible : styles.hidden
                    }`}
                    onClick={() => setRegisterValue('confirmPassword', '')}
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    className={styles.togglePasswordIcon}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
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
              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faEnvelope} className={styles.labelIcon} />
                  Email
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    className={styles.form__input}
                    placeholder="Введите email"
                    {...loginRegister('email', {
                      required: 'Введите email',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Некорректный формат email',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${loginEmail ? styles.visible : styles.hidden}`}
                    onClick={() => setLoginValue('email', '')}
                  />
                </div>
                {loginErrors.email && (
                  <p className={styles.form__error}>{loginErrors.email.message}</p>
                )}
              </div>

              <div className={styles.form__group}>
                <label className={styles.form__label}>
                  <FontAwesomeIcon icon={faLock} className={styles.labelIcon} />
                  Пароль
                </label>
                <div className={styles.inputWrapper}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className={styles.form__input}
                    placeholder="Введите пароль"
                    {...loginRegister('password', {
                      required: 'Введите пароль',
                      minLength: {
                        value: 6,
                        message: 'Пароль должен быть не менее 6 символов',
                      },
                    })}
                  />
                  <FontAwesomeIcon
                    icon={faTimes}
                    className={`${styles.clearIcon} ${
                      loginPassword ? styles.visible : styles.hidden
                    }`}
                    onClick={() => setLoginValue('password', '')}
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className={styles.togglePasswordIcon}
                    onClick={() => setShowPassword((prev) => !prev)}
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
