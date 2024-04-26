import { Button, Menu } from '@mantine/core';
import { NavLink } from 'react-router-dom';

// Can be more generalized further as per the requirements
const ActionMenu = ({ rowId }: { rowId: string | number }) => {
  return (
    <Menu withinPortal position="bottom-end" shadow="sm">
      <Menu.Target>
        <Button variant="outlined" size="compact-xs">
          Actions
        </Button>
      </Menu.Target>

      <Menu.Dropdown className="rounded-2xl p-2">
        <Menu.Item
          component={NavLink}
          to={`${rowId}/edit`}
          className="hover:rounded-xl items-start"
        >
          Edit
        </Menu.Item>
        <Menu.Item
          component={NavLink}
          to={`#`}
          className="hover:rounded-xl items-start"
        >
          Remove
        </Menu.Item>
        <Menu.Item color="red" className="hover:rounded-xl items-start">
          Delete
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenu;
