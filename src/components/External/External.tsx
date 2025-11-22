/*
  Компонент: External
  Описание: Страница для отображения внешних документов. Содержит заголовок, поиск и таблицу `ExternalTable`.
*/

import { type ReactElement } from 'react';
import style from './External.module.css';
import { ExternalTable } from './ExternalTable/ExternalTable';

const External = (): ReactElement => {
  return (
    <div className={style.page}>
      <ExternalTable />
    </div>
  );
};

export default External;
