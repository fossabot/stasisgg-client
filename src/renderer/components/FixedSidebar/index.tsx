import React from 'react';
import Sidebar, { SidebarStyles } from 'react-sidebar';
import SidebarContent from 'src/renderer/components/FixedSidebar/SidebarContent';
import 'src/renderer/index.css';

type SidebarProps = {
  docked: boolean;
  open: boolean;
  shadow: boolean;
  transitions: boolean;
  styles: SidebarStyles;
  children: React.ReactNode;
};

const MySidebar: React.FC<SidebarProps> = ({
  docked,
  open,
  shadow,
  transitions,
  styles,
  children
}: SidebarProps) => (
  <Sidebar
    sidebar={<SidebarContent />}
    docked={docked}
    open={open}
    shadow={shadow}
    transitions={transitions}
    styles={styles}
    contentClassName={'custom-scrollbar'}
  >
    {children}
  </Sidebar>
);

export default MySidebar;
