import React from 'react';

import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className='z-30 hidden w-full flex-shrink-0 overflow-y-auto border-r-1 bg-white dark:bg-gray-800 lg:block'>
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
