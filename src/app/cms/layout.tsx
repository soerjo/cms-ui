import React from 'react';
import { CmsSidebar } from '@/components/cms/CmsSidebar';

export default function CmsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-surface font-sans text-body-md text-on-surface min-h-screen antialiased">
      <CmsSidebar />
      <div className="pl-72 flex flex-col min-h-screen">{children}</div>
    </div>
  );
}
