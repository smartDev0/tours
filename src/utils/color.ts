import { theme } from "styles/theme";
import { CTAColor } from "app-types/color";

export const getCTAColor = (ctaColor: CTAColor) => {
  switch (ctaColor) {
    case CTAColor.Yellow:
      return theme["yellowColor"];
    case CTAColor.Primary:
    default:
      return theme["accentColor"];
  }
};

export const getCTADarkenColor = (ctaColor: CTAColor) => {
  switch (ctaColor) {
    case CTAColor.Yellow:
      return theme["yellowDarkenColor"];
    case CTAColor.Primary:
    default:
      return theme["accentDarkenColor"];
  }
};
