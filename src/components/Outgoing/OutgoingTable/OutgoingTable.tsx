import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import '../../shared/DocumentsTable.css';

interface Document {
  id: string;
  title: string;
  recipient: string;
  date: string;
  downloadLink: string;
}

const documentsData: Document[] = [
  {
    id: 'out-1',
    title: 'Лист-запит',
    recipient: 'ТОВ "Контрагент"',
    date: '2024-01-15',
    downloadLink: '/documents/outgoing_1.pdf',
  },
  {
    id: 'out-2',
    title: 'Офіційна відповідь',
    recipient: 'ПП "Партнер"',
    date: '2024-01-14',
    downloadLink: '/documents/outgoing_2.pdf',
  },
  {
    id: 'out-3',
    title: 'Договір про надання послуг',
    recipient: 'ФОП Іванов',
    date: '2024-01-13',
    downloadLink: '/documents/outgoing_3.pdf',
  },
];

export function OutgoingTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.recipient}</Table.Td>
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
            <Table.Th className="documents-table__header-cell">Вихідні документи</Table.Th>
            <Table.Th className="documents-table__header-cell">Отримувач</Table.Th>
            <Table.Th className="documents-table__header-cell">Дата</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

