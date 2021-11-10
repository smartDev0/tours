export type FeatureCategoryType =
  | "customer-service"
  | "marketing-automation"
  | "customer-satisfaction";

export interface Feature {
  id: string;
  slug: string;
  name: string;
  priority: number;
  category: FeatureCategoryType;
}
