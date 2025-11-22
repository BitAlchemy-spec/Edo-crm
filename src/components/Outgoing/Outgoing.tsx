/*
  Компонент: Outgoing
  Описание: Страница для отображения исходящих документов. Содержит заголовок, поисковую панель и таблицу `OutgoingTable`.
  Props: не принимает пропсы.
  Экспорт: именованный/дефолтный (см. реализацию).
*/

import { type ReactElement } from 'react';
import style from './Outgoing.module.css';
import { OutgoingTable } from './OutgoingTable/OutgoingTable';

const Outgoing = (): ReactElement => {
  return (
    <div className={style.page}>
      <OutgoingTable />
    </div>
  );
};

export default Outgoing;
