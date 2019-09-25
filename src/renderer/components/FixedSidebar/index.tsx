import React from 'react';
import Sidebar from 'react-sidebar';
import SidebarContent from 'src/renderer/components/FixedSidebar/SidebarContent';

type SidebarProps = {
  docked: boolean;
  open: boolean;
  shadow: boolean;
  transitions: boolean;
  children: React.ReactNode;
};

const MySidebar: React.FC<SidebarProps> = ({
  docked,
  open,
  shadow,
  transitions,
  children
}: SidebarProps) => (
  <Sidebar
    sidebar={<SidebarContent />}
    docked={docked}
    open={open}
    shadow={shadow}
    transitions={transitions}
  >
    {children}
  </Sidebar>
)

export default MySidebar;
