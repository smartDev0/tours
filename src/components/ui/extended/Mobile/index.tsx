import React from "react";
import { useTranslation } from "react-i18next";
import ImageWithDescription from "components/ui/base/ImageWithDescription";

const Mobile = () => {
  const { t } = useTranslation();

  return (
    <ImageWithDescription
      title={t("components.ui.extended.Mobile.title")}
      description={t("components.ui.extended.Mobile.subtitle")}
      image={{
        relativePath: "components/mobile/live-chat-mobile-sdk.jpg",
        alt: "live chat mobile sdk",
        position: "left",
        fullWidth: true,
      }}
      cta={{
        link: "/features/live-chat-for-mobile-apps/",
        text: t("components.ui.extended.Mobile.cta"),
      }}
    />
  );
};

export default Mobile;
