export interface Plan {
  slug: string;
  order: number;
  badgeText: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  ctaText: string;
  enterpriseCta?: boolean;
  invertedButton: boolean;
  mainFeatures: string[];
  detailsTitle: string;
  details: {
    title: string;
    link?: string;
  }[];
  node_locale: string;
}

export interface PlansQueryResult {
  plans: {
    nodes: Plan[];
  };
}
