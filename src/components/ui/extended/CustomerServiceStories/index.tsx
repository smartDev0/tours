import React from "react";
import HorizontalStoriesMenu from "components/ui/base/HorizontalStoriesMenu";
import { useTranslation } from "react-i18next";

interface CustomerServiceStoriesProps {
  withoutCta?: boolean;
}

const CustomerServiceStories = ({
  withoutCta,
}: CustomerServiceStoriesProps) => {
  const { t } = useTranslation();

  const elements = [
    {
      title: t("components.ui.extended.CustomerServiceStories.textChat"),
      story: {
        relativePath: "pages/features/live-chat/live-chat-superpowers.mov",
      },
    },
    {
      title: t("components.ui.extended.CustomerServiceStories.videoChat"),
      story: {
        relativePath: "pages/features/video-live-chat/video-live-chat.mov",
      },
    },
    {
      title: t("components.ui.extended.CustomerServiceStories.helpCenter"),
      story: {
        relativePath: "pages/features/help-center/help-center-view.mov",
      },
    },
    {
      title: t("components.ui.extended.CustomerServiceStories.dashboard"),
      story: {
        relativePath: "pages/features/live-chat/dashboard.mov",
      },
    },
  ];

  return (
    <HorizontalStoriesMenu
      title={t("components.ui.extended.CustomerServiceStories.customerService")}
      paragraph={t("components.ui.extended.CustomerServiceStories.paragraph")}
      elements={elements}
      cta={
        withoutCta
          ? undefined
          : {
              text: t(
                "components.ui.extended.CustomerServiceStories.discoverMore"
              ),
              link: "/solutions/customer-service/",
            }
      }
    />
  );
};

export default CustomerServiceStories;
