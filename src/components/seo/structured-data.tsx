import {
  buildOrganizationJsonLd,
  buildWebSiteJsonLd,
} from '@/lib/seo/json-ld';

export function StructuredData() {
  const jsonLd = [buildOrganizationJsonLd(), buildWebSiteJsonLd()];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
