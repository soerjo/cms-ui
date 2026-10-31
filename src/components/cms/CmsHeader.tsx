'use client';

import React from 'react';

interface CmsHeaderProps {
  breadcrumbTitle?: string;
  onRevalidate?: () => void;
  isRevalidating?: boolean;
}

export const CmsHeader: React.FC<CmsHeaderProps> = ({
  breadcrumbTitle = 'Studio',
  onRevalidate,
  isRevalidating = false,
}) => {
  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg border-b border-surface-container/40">
      <div className="flex items-center gap-space-md">
        <div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
          <span className="text-on-surface font-title-sm text-title-sm font-semibold">{breadcrumbTitle}</span>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
            siteKey: kult-barber
          </span>
        </div>
        <div className="h-4 w-[1px] bg-secondary-container"></div>
        <div className="hidden md:flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-low text-on-surface font-label-xs text-label-xs">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span>Connected to Next.js Delivery v1</span>
        </div>
      </div>

      <div className="flex items-center gap-space-sm">
        <div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant cursor-pointer hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-[16px]">search</span>
          <span className="font-body-sm text-body-sm hidden sm:inline">Quick search</span>
          <kbd className="px-1.5 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            ⌘K
          </kbd>
        </div>

        <button
          onClick={onRevalidate}
          disabled={isRevalidating}
          className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors disabled:opacity-75"
          type="button"
        >
          <span className={`material-symbols-outlined text-[16px] ${isRevalidating ? 'animate-spin' : ''}`}>bolt</span>
          <span className="hidden lg:inline">{isRevalidating ? 'Revalidating...' : 'Revalidate Cache'}</span>
        </button>

        <button
          className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors relative"
          type="button"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined text-[20px]">notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error"></span>
        </button>

        <div className="flex items-center gap-space-sm pl-space-xs">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </div>
          <div className="hidden xl:flex flex-col text-left">
            <span className="font-title-sm text-title-sm text-on-surface font-semibold leading-none">
              Bambang Hermanto
            </span>
            <span className="font-label-xs text-label-xs text-on-surface-variant leading-tight">Lead Architect</span>
          </div>
        </div>
      </div>
    </header>
  );
};
