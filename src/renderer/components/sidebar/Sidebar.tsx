import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from 'src/renderer/components/sidebar/SidebarContent';

type SidebarProps = {
  docked: boolean;
  open: boolean;
  shadow: boolean;
  children: React.ReactNode;
};

const MySidebar: React.FC<SidebarProps> = ({
  docked,
  open,
  shadow,
  children
}: SidebarProps) => (
  <Sidebar
    sidebar={<SidebarContent />}
    docked={docked}
    open={open}
    shadow={shadow}
  >
    {children}
  </Sidebar>
);

export default MySidebar;
