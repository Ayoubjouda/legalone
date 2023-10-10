'use client';
import React, { useContext } from 'react';

import SidebarContent from './SidebarContent';

import useAppStore from '@/zustand/store';

function MobileSidebar() {
  const { isSidebarOpen, setSideBarState } = useAppStore();

  return (
    <>
      <div>
        <aside className="fixed inset-y-0 z-50 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden">
          <SidebarContent />
        </aside>
      </div>
    </>
  );
}

export default MobileSidebar;
