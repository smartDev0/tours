import FullWidthCarousel from "components/ui/base/FullWidthCarousel";
import * as React from "react";

export interface FunnelCarouselProps {
  title: string;
  description: string;
}

const FunnelCarousel = ({ title, description }: FunnelCarouselProps) => (
  <FullWidthCarousel
    title={title}
    description={description}
    images={[
      "add-tag",
      "delete-contact",
      "email-message",
      "entry-point",
      "fire-event",
      "goal",
      "if",
      "live-chat-message",
      "remove-tag",
      "set-property",
      "wait-time",
      "wait-until",
    ].map((image) => {
      return {
        relativePath: `components/funnel-carousel/marketing-automation-software-${image}.jpg`,
        alt: image,
      };
    })}
  />
);

export default FunnelCarousel;
