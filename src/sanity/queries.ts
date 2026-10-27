import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    seo {
      title,
      description,
      noIndex,
      image {
        asset-> {
          _id,
          url
        }
      }
    }
  }
`;

export const allPageSlugsQuery = groq`
  *[_type == "page" && defined(slug.current)] {
    "slug": slug.current,
    _updatedAt
  }
`;
