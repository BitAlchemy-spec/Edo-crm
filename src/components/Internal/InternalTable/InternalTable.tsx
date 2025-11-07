import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import '../../shared/DocumentsTable.css';

interface Document {
  id: string;
  title: string;
  department: string;
  date: string;
  downloadLink: string;
}

const documentsData: Document[] = [
  {
    id: 'int-1',
    title: 'Наказ про призначення',
    department: 'Відділ кадрів',
    date: '2024-01-15',
    downloadLink: '/documents/internal_1.pdf',
  },
  {
    id: 'int-2',
    title: 'Положення про відділ',
    department: 'Юридичний відділ',
    date: '2024-01-14',
    downloadLink: '/documents/internal_2.pdf',
  },
  {
    id: 'int-3',
    title: 'Звіт про роботу',
    department: 'Відділ продажів',
    date: '2024-01-13',
    downloadLink: '/documents/internal_3.pdf',
  },
];

export function InternalTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.department}</Table.Td>
      <Table.Td className="documents-table__cell">{item.date}</Table.Td>
      <Table.Td className="documents-table__cell documents-table__download-cell">
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
      <Table className="documents-table">
        <Table.Thead className="documents-table__head">
          <Table.Tr className="documents-table__row">
            <Table.Th className="documents-table__header-cell">Внутрішні документи</Table.Th>
            <Table.Th className="documents-table__header-cell">Відділ</Table.Th>
            <Table.Th className="documents-table__header-cell">Дата</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

