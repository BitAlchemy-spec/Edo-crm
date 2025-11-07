import { Table, Text, Group, Badge } from '@mantine/core';
import '../../shared/DocumentsTable.css';

interface Tariff {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string;
}

const tariffsData: Tariff[] = [
  {
    id: 'tariff-1',
    name: 'Базовий',
    price: '500 грн/міс',
    period: '1 місяць',
    features: 'До 100 документів',
  },
  {
    id: 'tariff-2',
    name: 'Стандарт',
    price: '1000 грн/міс',
    period: '1 місяць',
    features: 'До 500 документів',
  },
  {
    id: 'tariff-3',
    name: 'Преміум',
    price: '2000 грн/міс',
    period: '1 місяць',
    features: 'Необмежено документів',
  },
];

export function HelpTable() {
  const rows = tariffsData.map((item: Tariff) => (
    <Table.Tr key={item.id} className="documents-table__row">
      <Table.Td className="documents-table__cell">
        <Group>
          <Text className="documents-table__title">
            {item.name}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td className="documents-table__cell documents-table__author">{item.price}</Table.Td>
      <Table.Td className="documents-table__cell">{item.period}</Table.Td>
      <Table.Td className="documents-table__cell">{item.features}</Table.Td>
    </Table.Tr>
  ));

  return (
      <Table className="documents-table">
        <Table.Thead className="documents-table__head">
          <Table.Tr className="documents-table__row">
            <Table.Th className="documents-table__header-cell">Тарифи</Table.Th>
            <Table.Th className="documents-table__header-cell">Ціна</Table.Th>
            <Table.Th className="documents-table__header-cell">Період</Table.Th>
            <Table.Th className="documents-table__header-cell">Можливості</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
  );
}

