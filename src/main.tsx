/**
 * Точка входа в приложение
 * Инициализирует React приложение и монтирует его в DOM
 */
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";

// Получаем корневой элемент DOM для монтирования приложения
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Рендерим главный компонент роутера приложения
root.render(<AppRouter />);

