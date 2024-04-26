import { Menu } from '@mantine/core';
import { NavLink } from 'react-router-dom';

interface MenuItemPropsT {
  component?: any;
  route?: string;
  icon: any;
  iconSize?: string | number;
  [restProps: string]: unknown;
}

const MeunItem = (props: MenuItemPropsT) => {
  const {
    component = NavLink,
    route = '#',
    icon,
    iconSize = '20',
    ...restProps
  } = props;

  return (
    <Menu.Item
      component={component}
      to={route}
      leftSection={icon}
      className="hover:rounded-xl items-start"
      {...restProps}
    >
      Home
    </Menu.Item>
  );
};

export default MeunItem;
