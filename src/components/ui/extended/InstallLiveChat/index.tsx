import React from "react";
import FeatureGrid from "components/ui/base/FeatureGrid";
import { useTranslation } from "react-i18next";

const InstallLiveChat = () => {
  const { t } = useTranslation();
  return (
    <FeatureGrid
      title={t("components.ui.extended.InstallLiveChat.title")}
      sections={[
        {
          title: t("components.ui.extended.InstallLiveChat.website.title"),
          description: t(
            "components.ui.extended.InstallLiveChat.website.description"
          ),
          image: {
            alt: t("components.ui.extended.InstallLiveChat.website.title"),
            relativePath:
              "components/install-live-chat/install-live-chat-for-website.jpg",
          },
          links: [
            {
              text: t("components.ui.extended.InstallLiveChat.website.cta"),
              path: "/features/live-chat-for-website/",
            },
          ],
        },
        {
          title: t("components.ui.extended.InstallLiveChat.wordpress.title"),
          description: t(
            "components.ui.extended.InstallLiveChat.wordpress.description"
          ),
          image: {
            alt: t("components.ui.extended.InstallLiveChat.wordpress.title"),
            relativePath:
              "components/install-live-chat/install-live-chat-for-wordpress.jpg",
          },
          links: [
            {
              text: t("components.ui.extended.InstallLiveChat.wordpress.cta"),
              path: "/features/live-chat-plugin-for-wordpress/",
            },
          ],
        },
        {
          title: t("components.ui.extended.InstallLiveChat.shopify.title"),
          description: t(
            "components.ui.extended.InstallLiveChat.shopify.description"
          ),
          image: {
            alt: t("components.ui.extended.InstallLiveChat.shopify.title"),
            relativePath:
              "components/install-live-chat/install-live-chat-for-shopify.jpg",
          },
          links: [
            {
              text: t("components.ui.extended.InstallLiveChat.shopify.cta"),
              path: "/features/live-chat-plugin-for-shopify/",
            },
          ],
        },
      ]}
      centered
      centeredTitle
      mediumImages
    />
  );
};

export default InstallLiveChat;
