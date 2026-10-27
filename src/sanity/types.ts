export type SanitySEO = {
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref?: string;
      url?: string;
    };
  };
  noIndex?: boolean;
};

export type SanitySiteSettings = {
  title?: string;
  description?: string;
  seo?: SanitySEO;
};

export type SanityPage = {
  _id: string;
  title: string;
  slug?: {
    current?: string;
  };
  seo?: SanitySEO;
};
