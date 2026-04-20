export const isOfflineMode = import.meta.env.VITE_OFFLINE_MODE === 'true';

export const isExternalHrefAvailable = (href?: string): boolean => {
  if (!href || href === '#') return false;
  if (isOfflineMode) return false;
  return true;
};
