import { siteConfig } from '@/lib/site-config';

export type JsonLd = Record<string, unknown>;

export type FAQItem = {
  question: string;
  answer: string;
};

export function buildOrganizationJsonLd(): JsonLd {
  const sameAs = [siteConfig.social.twitter, siteConfig.social.linkedin].filter(
    Boolean,
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.organization.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.organization.logo,
    email: siteConfig.contact.email,
    knowsAbout: siteConfig.keywords,
    sameAs,
  };
}

export function buildWebSiteJsonLd(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.locale.replace('_', '-'),
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
  };
}

export function buildWebPageJsonLd(input: {
  path: string;
  title: string;
  description: string;
}): JsonLd {
  const absoluteUrl = new URL(input.path, siteConfig.url).toString();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl}#webpage`,
    url: absoluteUrl,
    name: input.title,
    description: input.description,
    isPartOf: {
      '@id': `${siteConfig.url}#website`,
    },
    about: {
      '@id': `${siteConfig.url}#organization`,
    },
  };
}

export function buildFAQJsonLd(faqItems: FAQItem[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
