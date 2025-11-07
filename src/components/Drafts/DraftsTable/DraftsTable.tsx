import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload, IconEdit } from '@tabler/icons-react';
import '../../shared/DocumentsTable.css';

interface Document {
  id: string;
  title: string;
  lastModified: string;
  downloadLink: string;
}

const documentsData: Document[] = [
  {
    id: 'draft-1',
    title: 'Чернетка договору',
    lastModified: '2024-01-15',
    downloadLink: '/documents/draft_1.pdf',
  },
  {
    id: 'draft-2',
    title: 'Чернетка листа',
    lastModified: '2024-01-14',
    downloadLink: '/documents/draft_2.pdf',
  },
  {
    id: 'draft-3',
    title: 'Чернетка звіту',
    lastModified: '2024-01-13',
    downloadLink: '/documents/draft_3.pdf',
  },
];

export function DraftsTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.lastModified}</Table.Td>
      <Table.Td className="documents-table__cell documents-table__download-cell">
        <Group gap="xs">
          <ActionIcon
            variant="subtle"
            color="blue"
            aria-label={`Редагувати ${item.title}`}
          >
            <IconEdit size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component="a"
            href={item.downloadLink}
            download
            variant="subtle"
            color="gray"
            aria-label={`Скачать ${item.title}`}
          >
            <IconDownload size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
      <Table className="documents-table">
        <Table.Thead className="documents-table__head">
          <Table.Tr className="documents-table__row">
            <Table.Th className="documents-table__header-cell">Чернетки</Table.Th>
            <Table.Th className="documents-table__header-cell">Останнє редагування</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

