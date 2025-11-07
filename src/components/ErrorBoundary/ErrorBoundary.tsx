/**
 * Компонент Error Boundary для обработки ошибок в React приложении
 * Перехватывает ошибки рендеринга и отображает fallback UI
 */
import React, { type ReactNode, Component, type ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // Кастомный компонент для отображения ошибки
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Классовый компонент для обработки ошибок
 * React требует классовый компонент для реализации Error Boundary API
 */
class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  /**
   * Статический метод для обновления состояния при возникновении ошибки
   * Вызывается автоматически при ошибке в дочерних компонентах
   */
  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  /**
   * Метод жизненного цикла для логирования ошибок
   * Вызывается после getDerivedStateFromError
   */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  /**
   * Сброс состояния ошибки для повторной попытки рендеринга
   */
  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          resetErrorBoundary={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

interface ErrorFallbackProps {
  error: Error | null;
  resetErrorBoundary: () => void;
}

/**
 * Компонент для отображения UI при возникновении ошибки
 * Показывает пользователю понятное сообщение и кнопки действий
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error, resetErrorBoundary }) => {
  /**
   * Обработчик перехода на главную страницу
   */
  const handleGoHome = (): void => {
    resetErrorBoundary();
    window.location.href = '/';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.icon}>⚠️</h1>
      <h2 className={styles.title}>
        Щось пішло не так
      </h2>
      <p className={styles.description}>
        Виникла помилка під час роботи додатку. Будь ласка, спробуйте оновити сторінку або повернутися на головну.
      </p>
      {/* Детали ошибки отображаются только в режиме разработки */}
      {error && import.meta.env.DEV && (
        <details className={styles.errorDetails}>
          <summary className={styles.errorSummary}>
            Деталі помилки (тільки для розробки)
          </summary>
          <pre className={styles.errorPre}>
            {error.toString()}
            {error.stack && `\n\n${error.stack}`}
          </pre>
        </details>
      )}
      <div className={styles.actions}>
        <button
          onClick={resetErrorBoundary}
          className={`${styles.button} ${styles.buttonRetry}`}
        >
          Спробувати знову
        </button>
        <button
          onClick={handleGoHome}
          className={`${styles.button} ${styles.buttonHome}`}
        >
          На головну
        </button>
      </div>
    </div>
  );
};

/**
 * Функциональный компонент-обертка для ErrorBoundary
 * Предоставляет функциональный API поверх классового компонента
 */
const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
  return (
    <ErrorBoundaryClass fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  );
};

export default ErrorBoundary;

