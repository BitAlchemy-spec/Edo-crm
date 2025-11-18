import { useState } from 'react';
import { Table, Text, Group, ActionIcon, TextInput } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';

interface Document {
  id: string;
  title: string;
  author: string;
  date: string;
  downloadLink: string;
}

const documentsData: Document[] = [
  {
    id: 'inc-1',
    title: 'Договір про постачання',
    author: 'Олена Петренко',
    date: '2024-01-15',
    downloadLink: '/documents/incoming_1.pdf',
  },
  {
    id: 'inc-2',
    title: 'Акт виконаних робіт',
    author: 'Михайло Коваленко',
    date: '2024-01-14',
    downloadLink: '/documents/incoming_2.pdf',
  },
  {
    id: 'inc-3',
    title: 'Рахунок-фактура №123',
    author: 'Тетяна Сидоренко',
    date: '2024-01-13',
    downloadLink: '/documents/incoming_3.pdf',
  },
];

export function IncomingTable() {
  const [search, setSearch] = useState('');

  const filtered = documentsData.filter(
    (doc) =>
      doc.title.toLowerCase().includes(search.toLowerCase()) ||
      doc.author.toLowerCase().includes(search.toLowerCase()) ||
      doc.date.includes(search) // дозволяє шукати по даті
  );

  const rows = filtered.map((item: Document) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">{item.title}</Text>
        </Group>
      </Table.Td>

      <Table.Td className="documents-table__cell documents-table__author">
        {item.author}
      </Table.Td>

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
    <div className="documents-table__wrapper">
      <Group justify="space-between" align="center" mb="md">
        <Text fw={600} size="lg">
          Вхідні документи
        </Text>

        <TextInput
          placeholder="Пошук"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </Group>

      <Table striped highlightOnHover withTableBorder withColumnBorders className="documents-table">
        <Table.Thead className="documents-table__head">
          <Table.Tr className="documents-table__row">
            <Table.Th className="documents-table__header-cell">Назва документа</Table.Th>
            <Table.Th className="documents-table__header-cell">Автор</Table.Th>
            <Table.Th className="documents-table__header-cell">Дата</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <Table.Tr>
              <Table.Td colSpan={4}>
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
}

