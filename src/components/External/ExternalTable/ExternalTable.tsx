/*
  Компонент: ExternalTable
  Описание: Таблица для списка внешних документов. Использует UI-компоненты Mantine и классы `documents-table*` для единообразного отображения.
  Props: не принимает внешних пропсов — данные заданы в файле для демонстрации.
  Экспорт: дефолтный/именованный экспорт `ExternalTable`.
*/

import { ActionIcon, Group, Table, Text, TextInput } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { useState } from 'react';

interface DocumentItem {
  id: string;
  title: string;
  author: string;
  downloadLink: string;
}

const documentsData: DocumentItem[] = [
  {
    id: 'doc-1',
    title: 'Meeting Minutes',
    author: 'Bob Williams',
    downloadLink: '/documents/meeting_minutes.docx',
  },
  {
    id: 'doc-2',
    title: 'Financial Report July',
    author: 'Charlie Brown',
    downloadLink: '/documents/financial_report_july.xlsx',
  },
  {
    id: 'doc-3',
    title: 'Marketing Strategy',
    author: 'Diana Prince',
    downloadLink: '/documents/marketing_strategy.pdf',
  },
  {
    id: 'doc-4',
    title: 'HR Policy Updates',
    author: 'Eve Adams',
    downloadLink: '/documents/hr_policy_updates.pdf',
  },
];

export const ExternalTable: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredDocs = documentsData.filter(
    (doc) =>
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.author.toLowerCase().includes(search.toLowerCase()),
  );

  const rows = filteredDocs.map((item) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Text fw={500}>{item.title}</Text>
      </Table.Td>

      <Table.Td className="documents-table__cell documents-table__author">
        <Text c="dimmed">{item.author}</Text>
      </Table.Td>

      <Table.Td
        className="documents-table__cell documents-table__download-cell"
        ta="center"
      >
        <ActionIcon
          component="a"
          href={item.downloadLink}
          download
          variant="subtle"
          color="gray"
          aria-label={`Скачать ${item.title}`}
        >
          <IconDownload size={20} stroke={1.5} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className="documents-table__wrapper">
      <Group
        justify="space-between"
        align="center"
        mb="md"
        className="documents-table__header"
      >
        <Text fw={600} size="lg" className="documents-table__title">
          Зовнішні документи
        </Text>

        <TextInput
          placeholder="Пошук"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </Group>

      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        className="documents-table"
      >
        <Table.Thead className="documents-table__head">
          <Table.Tr>
            <Table.Th className="documents-table__th">Назва документа</Table.Th>
            <Table.Th className="documents-table__th">Автор</Table.Th>
            <Table.Th ta="center" w={80}></Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={3}>
                <Text ta="center" c="dimmed">
                  Нічого не знайдено
                </Text>
              </Table.Td>
            </Table.Tr>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
};
