/*
  Компонент: Incoming
  Описание: Страница для отображения входящих документов. Содержит заголовок, поисковую панель и таблицу `IncomingTable`.
  Props: не принимает пропсы.
  Экспорт: именованный/дефолтный (см. реализацию).
*/

import { type ReactElement } from 'react';
import style from './Incoming.module.css';
import { IncomingTable } from './IncomingTable/IncomingTable';

const Incoming = (): ReactElement => {
  return (
    <div className={style.page}>
      <IncomingTable />
    </div>
  );
};

export default Incoming;
