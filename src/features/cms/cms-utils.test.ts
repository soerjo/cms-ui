import { describe, it, expect } from 'vitest';
import { formatHits, calculateSingletonSyncRate, getStatusBadgeClass } from './cms-utils';

describe('CMS Utilities', () => {
  it('formats hits correctly into M, k, and raw numbers', () => {
    expect(formatHits(4_820_000)).toBe('4.82M');
    expect(formatHits(12_400)).toBe('12.4k');
    expect(formatHits(450)).toBe('450');
  });

  it('calculates singleton sync rate accurately', () => {
    expect(calculateSingletonSyncRate(5, 5)).toBe(100);
    expect(calculateSingletonSyncRate(3, 4)).toBe(75);
    expect(calculateSingletonSyncRate(0, 0)).toBe(0);
    expect(calculateSingletonSyncRate(2, -1)).toBe(0);
  });

  it('returns appropriate badge class for various statuses', () => {
    expect(getStatusBadgeClass('published')).toBe('bg-surface-container-high text-primary');
    expect(getStatusBadgeClass('draft')).toBe('bg-surface-container text-on-surface-variant');
    expect(getStatusBadgeClass('pending')).toBe('bg-error-container text-on-error-container');
    expect(getStatusBadgeClass('archived')).toBe('bg-surface-container-low text-outline');
  });
});
