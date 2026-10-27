import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { dataset, getSanityProjectId } from '@/sanity/env';
import { schemaTypes } from '@/sanity/schemas';

export default defineConfig({
  name: 'wyeast-studio',
  title: 'Content Studio',
  basePath: '/studio',

  projectId: getSanityProjectId(),
  dataset,

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
