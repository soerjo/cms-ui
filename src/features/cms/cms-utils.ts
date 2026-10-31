export interface DeliveryMetric {
  hits: number;
  cachedPercentage: number;
  activeCollectionsCount: number;
  singletonsSyncedCount: number;
  totalSingletons: number;
}

export function formatHits(hits: number): string {
  if (hits >= 1_000_000) {
    return `${(hits / 1_000_000).toFixed(2)}M`;
  }
  if (hits >= 1_000) {
    return `${(hits / 1_000).toFixed(1)}k`;
  }
  return hits.toString();
}

export function calculateSingletonSyncRate(synced: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((synced / total) * 100);
}

export function getStatusBadgeClass(status: 'published' | 'draft' | 'pending' | 'archived'): string {
  switch (status) {
    case 'published':
      return 'bg-surface-container-high text-primary';
    case 'draft':
      return 'bg-surface-container text-on-surface-variant';
    case 'pending':
      return 'bg-error-container text-on-error-container';
    case 'archived':
    default:
      return 'bg-surface-container-low text-outline';
  }
}
