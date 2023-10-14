import React from 'react';

import SidebarContent from './SidebarContent';

function DesktopSidebar() {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-full overflow-y-auto bg-white dark:bg-gray-800 lg:block border-r-1">
      <SidebarContent />
    </aside>
  );
}

export default DesktopSidebar;
