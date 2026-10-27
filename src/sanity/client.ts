import { createClient } from 'next-sanity';
import { apiVersion, dataset, getSanityProjectId } from './env';

export const client = createClient({
  projectId: getSanityProjectId(),
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  perspective: 'published',
});
