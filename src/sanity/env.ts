export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-07-05';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const readToken = process.env.SANITY_API_READ_TOKEN;
export const writeToken = process.env.SANITY_API_WRITE_TOKEN;
export const previewSecret = process.env.SANITY_PREVIEW_SECRET;

export const isSanityConfigured = Boolean(projectId);

export function getSanityProjectId(): string {
  return projectId || 'development-placeholder';
}
