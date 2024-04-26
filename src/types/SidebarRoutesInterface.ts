import React from 'react';

export interface SidebarRoutesInterface {
  name: string;
  path: string;
  icon?: React.ReactNode;
  children: SidebarRoutesInterface[];
}
