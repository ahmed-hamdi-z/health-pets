
export type CoreValueItem = {
  title: string;
  description: string;
};

export type AdviceColumnProps = {
  title: string;
  paragraphs: string[];
  petImage: string;
  petImageAlt?: string;
};

export type AdviceSectionProps = {
  adviceTitle: string;
  adviceText: string[];
  coreValues: CoreValueItem[];
  ctaText: string;
};