import { defineField, defineType } from 'sanity';

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().max(160),
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Global metadata, SEO, and social defaults',
      };
    },
  },
});
