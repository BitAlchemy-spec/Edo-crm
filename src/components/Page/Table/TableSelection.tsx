import { Table, Text, Group } from '@mantine/core';
import './TableReviews.css';

interface Document {
  id: string;
  title: string;
  author: string;
}

const documentsData: Document[] = [
  {
    id: 'doc-1',
    title: 'Proposal Q3',
    author: 'Alice Johnson',
  },
  {
    id: 'doc-2',
    title: 'Meeting Minutes',
    author: 'Bob Williams',
  },
  {
    id: 'doc-3',
    title: 'Financial Report July',
    author: 'Charlie Brown',
  },
  {
    id: 'doc-4',
    title: 'Marketing Strategy',
    author: 'Diana Prince',
  },
  {
    id: 'doc-5',
    title: 'HR Policy Updates',
    author: 'Eve Adams',
  },
];

export function DocumentsTable() {
  const rows = documentsData.map((item: Document) => (
    <Table.Tr key={item.id}>
      <Table.Td>
        <Group>
          <Text>
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>{item.author}</Table.Td>
    </Table.Tr>
  ));

  return (
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Зовнішні документи</Table.Th>
            <Table.Th>Автор</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}
