import { Table, Text, Group, ActionIcon } from '@mantine/core';
import { IconDownload, IconCopy } from '@tabler/icons-react';
import '../../shared/DocumentsTable.css';

interface Template {
  id: string;
  title: string;
  category: string;
  downloadLink: string;
}

const templatesData: Template[] = [
  {
    id: 'tpl-1',
    title: 'Шаблон договору',
    category: 'Договори',
    downloadLink: '/templates/contract_template.docx',
  },
  {
    id: 'tpl-2',
    title: 'Шаблон листа',
    category: 'Листування',
    downloadLink: '/templates/letter_template.docx',
  },
  {
    id: 'tpl-3',
    title: 'Шаблон звіту',
    category: 'Звіти',
    downloadLink: '/templates/report_template.docx',
  },
];

export function TemplatesTable() {
  const rows = templatesData.map((item: Template) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.title}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.category}</Table.Td>
      <Table.Td className="documents-table__cell documents-table__download-cell">
        <Group gap="xs">
          <ActionIcon
            variant="subtle"
            color="blue"
            aria-label={`Використати ${item.title}`}
          >
            <IconCopy size={18} stroke={1.5} />
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
            <Table.Th className="documents-table__header-cell">Шаблони</Table.Th>
            <Table.Th className="documents-table__header-cell">Категорія</Table.Th>
            <Table.Th className="documents-table__header-cell documents-table__header-cell--download"></Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

