import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import '../../shared/DocumentsTable.css';

interface Document {
  id: string;
  title: string;
  type: string;
  archivedDate: string;
  downloadLink: string;
}

const documentsData: Document[] = [
  {
    id: 'arch-1',
    title: 'Договір 2023',
    type: 'Зовнішній',
    archivedDate: '2023-12-31',
    downloadLink: '/documents/archive_1.pdf',
  },
  {
    id: 'arch-2',
    title: 'Звіт за 2023 рік',
    type: 'Внутрішній',
    archivedDate: '2023-12-30',
    downloadLink: '/documents/archive_2.pdf',
  },
  {
    id: 'arch-3',
    title: 'Переписка з клієнтом',
    type: 'Вхідний',
    archivedDate: '2023-12-29',
    downloadLink: '/documents/archive_3.pdf',
  },
];

export function ArchiveTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.type}</Table.Td>
      <Table.Td className="documents-table__cell">{item.archivedDate}</Table.Td>
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
            <Table.Th className="documents-table__header-cell">Архів</Table.Th>
            <Table.Th className="documents-table__header-cell">Тип</Table.Th>
            <Table.Th className="documents-table__header-cell">Дата архівування</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

