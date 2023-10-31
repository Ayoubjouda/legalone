import React from 'react';

import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className='no-scrollbar sticky z-30 hidden  h-screen overflow-y-auto border-r-1 bg-black dark:bg-gray-800 lg:block'>
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
