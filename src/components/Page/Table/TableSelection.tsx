import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react'; // Импортируем иконку для скачивания
import './TableReviews.css';

interface Document {
  id: string;
  title: string;
  author: string;
  downloadLink: string; // Добавили поле для ссылки на скачивание
}

const documentsData: Document[] = [
  {
    id: 'doc-1',
    title: 'Proposal Q3',
    author: 'Alice Johnson',
    downloadLink: '/documents/proposal_q3.pdf', // Пример ссылки
  },
  {
    id: 'doc-2',
    title: 'Meeting Minutes',
    author: 'Bob Williams',
    downloadLink: '/documents/meeting_minutes.docx',
  },
  {
    id: 'doc-3',
    title: 'Financial Report July',
    author: 'Charlie Brown',
    downloadLink: '/documents/financial_report_july.xlsx',
  },
  {
    id: 'doc-4',
    title: 'Marketing Strategy',
    author: 'Diana Prince',
    downloadLink: '/documents/marketing_strategy.pdf',
  },
  {
    id: 'doc-5',
    title: 'HR Policy Updates',
    author: 'Eve Adams',
    downloadLink: '/documents/hr_policy_updates.pdf',
  },
];

export function DocumentsTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.author}</Table.Td>
      {/* Новая ячейка для скачивания */}
      <Table.Td className="documents-table__cell documents-table__download-cell">
        <ActionIcon
          component="a" // Делаем иконку ссылкой
          href={item.downloadLink}
          download // Атрибут download для скачивания файла
          variant="subtle" // Стиль кнопки
          color="gray"
          aria-label={`Скачать ${item.title}`}
        >
          <IconDownload size={20} stroke={1.5} />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
      <Table className="documents-table">
        <Table.Thead className="documents-table__head">
          <Table.Tr className="documents-table__row">
            <Table.Th className="documents-table__header-cell">Зовнішні документи</Table.Th>
            <Table.Th className="documents-table__header-cell">Автор</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}