import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CmsHeader } from './CmsHeader';
import { CmsSidebar } from './CmsSidebar';

vi.mock('next/navigation', () => ({
  usePathname: () => '/cms/overview',
}));

describe('CmsSidebar & CmsHeader Components', () => {
  it('renders CmsSidebar with brand title and active navigation item', () => {
    render(<CmsSidebar />);
    expect(screen.getByText('PublishCore CMS')).toBeInTheDocument();
    expect(screen.getByText('Studio Delivery v1')).toBeInTheDocument();
    expect(screen.getByText('kult-barber')).toBeInTheDocument();
    expect(screen.getByText('Overview & Metrics')).toBeInTheDocument();
    expect(screen.getByText('ISR Sync Online')).toBeInTheDocument();
  });

  it('renders CmsHeader with custom breadcrumb and handles revalidate trigger', () => {
    const handleRevalidate = vi.fn();
    const { rerender } = render(
      <CmsHeader breadcrumbTitle="Studio / Custom Breadcrumb" onRevalidate={handleRevalidate} isRevalidating={false} />,
    );

    expect(screen.getByText('Studio / Custom Breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Bambang Hermanto')).toBeInTheDocument();

    const revalBtn = screen.getByText('Revalidate Cache').closest('button');
    expect(revalBtn).toBeInTheDocument();
    if (revalBtn) fireEvent.click(revalBtn);
    expect(handleRevalidate).toHaveBeenCalledTimes(1);

    rerender(
      <CmsHeader breadcrumbTitle="Studio / Custom Breadcrumb" onRevalidate={handleRevalidate} isRevalidating={true} />,
    );
    expect(screen.getByText('Revalidating...')).toBeInTheDocument();
  });

  it('renders CmsHeader with default props when optional props omitted', () => {
    render(<CmsHeader />);
    expect(screen.getByText('Studio')).toBeInTheDocument();
  });
});
