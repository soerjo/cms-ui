'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const CmsSidebar: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Overview & Metrics', href: '/cms/overview', icon: 'analytics' },
    { label: 'Identitas Brand', href: '/cms/brand-identity', icon: 'badge' },
    { label: 'Koleksi Dinamis', href: '/cms/koleksi-dinamis', icon: 'folder_copy' },
    { label: 'Media & Asset Hub', href: '/cms/media-hub', icon: 'photo_library' },
    { label: 'Form Submissions', href: '/cms/form-submissions', icon: 'inbox' },
    { label: 'Frontend API & ISR', href: '/cms/frontend-api', icon: 'api' },
    { label: 'Schema Builder', href: '/cms/content-type-builder', icon: 'dataset' },
    { label: 'Singleton Engine', href: '/cms/singletons', icon: 'token' },
    { label: 'Dynamic Entry Editor', href: '/cms/entry-editor', icon: 'edit_document' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-lowest shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="px-space-md py-space-md bg-surface-container-lowest border-b border-surface-container/40">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">layers</span>
            </div>
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-on-surface font-semibold leading-tight">
                PublishCore CMS
              </span>
              <span className="font-label-xs text-label-xs text-on-surface-variant font-normal">
                Studio Delivery v1
              </span>
            </div>
          </div>
          <div className="mt-space-sm inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span>Headless Provider &amp; Asset Hub</span>
          </div>
        </div>

        <div className="px-space-md py-space-xs my-1">
          <div className="px-space-sm py-space-xs rounded-lg bg-surface-container-low flex items-center justify-between cursor-pointer hover:bg-surface-container transition-colors">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-on-surface-variant text-[16px]">domain</span>
              <div className="flex flex-col">
                <span className="font-label-xs text-label-xs text-on-surface-variant leading-none">ACTIVE SITE</span>
                <span className="font-title-sm text-title-sm text-on-surface font-medium leading-tight">
                  kult-barber
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">unfold_more</span>
          </div>
        </div>

        <div className="px-space-md pt-space-xs pb-space-xs">
          <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold tracking-wider uppercase">
            Workspace Engine
          </span>
        </div>
        <nav className="flex flex-col gap-0.5 px-space-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-space-sm px-space-sm py-2 rounded-lg transition-all ${
                  isActive
                    ? 'bg-primary-container text-on-primary font-medium shadow-xs'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                <span className="font-body-md text-body-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="p-space-md bg-surface-container-lowest border-t border-surface-container/40">
        <div className="p-space-sm rounded-xl bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-xs text-label-xs text-on-surface font-medium">ISR Sync Online</span>
          </div>
          <span className="font-label-xs text-label-xs text-on-surface-variant font-semibold">99.98%</span>
        </div>
      </div>
    </aside>
  );
};
