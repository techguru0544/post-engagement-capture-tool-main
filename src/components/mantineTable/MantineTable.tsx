import { useEffect, useState } from 'react';
import { Table, Checkbox, Card } from '@mantine/core';
import ActionMenu from '../menu/ActionMenu';
import { DynamicDataObject } from '@/types/common';

interface MantineTablePropsT {
  selectable?: boolean;
  tableRowsData: DynamicDataObject[];
}

// Table properties can be more generalized as per needed.
const MantineTable = ({
  selectable = true,
  tableRowsData
}: MantineTablePropsT) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [selectAllRows, setSelectAllRows] = useState<boolean>(false);

  const rows = tableRowsData.map((element, index) => (
    <Table.Tr
      key={index}
      bg={
        selectedRows.includes(element.id)
          ? 'var(--mantine-color-blue-light)'
          : undefined
      }
    >
      {selectable && (
        <Table.Td>
          <Checkbox
            aria-label="Select row"
            checked={selectedRows.includes(element.id)}
            onChange={event =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, element.id]
                  : selectedRows.filter(id => id !== element.id)
              )
            }
          />
        </Table.Td>
      )}
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.engaged}</Table.Td>
      <Table.Td>{element.acquried}</Table.Td>
      <Table.Td>{element.conversion}</Table.Td>
      <Table.Td>
        <ActionMenu rowId={element.id} />
      </Table.Td>
    </Table.Tr>
  ));

  useEffect(() => {
    if (selectAllRows) {
      setSelectedRows(tableRowsData.map(e => e.id));
    }

    return () => {
      setSelectedRows([]);
    };
  }, [selectAllRows]);

  return (
    <Card>
      <Table highlightOnHover withRowBorders={false} bg="white">
        <Table.Thead>
          <Table.Tr>
            {selectable && (
              <Table.Th>
                <Checkbox
                  aria-label="Select rows"
                  checked={selectAllRows}
                  onChange={() => setSelectAllRows(!selectAllRows)}
                />
              </Table.Th>
            )}
            <Table.Th>Name</Table.Th>
            <Table.Th>Engaged / Unique</Table.Th>
            <Table.Th>Acquired</Table.Th>
            <Table.Th>Conversion</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Card>
  );
};

export default MantineTable;
