/*
  Компонент: Internal
  Описание: Страница/вид для работы с внутренними документами. Отображает заголовок и таблицу `InternalTable`.
  Props: не принимает пропсы.
  Экспорт: именованный экспорт функции `Internal`.
*/

import { type ReactElement } from 'react';
import style from './Internal.module.css';
import { InternalTable } from './InternalTable/InternalTable';

const Internal = (): ReactElement => {
  return (
    <div className={style.page}>
      <InternalTable />
    </div>
  );
};

export default Internal;
