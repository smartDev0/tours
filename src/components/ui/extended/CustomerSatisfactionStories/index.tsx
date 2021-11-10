import React from "react";
import HorizontalStoriesMenu from "components/ui/base/HorizontalStoriesMenu";
import { useTranslation } from "react-i18next";

const CustomerSatisfactionStories = () => {
  const { t } = useTranslation();

  const elements = [
    {
      title: t("components.ui.extended.CustomerSatisfactionStories.feedback"),
      story: {
        relativePath: "pages/features/surveys/in-chat-survey.mov",
      },
    },
    {
      title: t("components.ui.extended.CustomerSatisfactionStories.learnHelp"),
      story: {
        relativePath: "pages/features/nps/net-promoter-score.mov",
      },
    },
    {
      title: t("components.ui.extended.CustomerSatisfactionStories.analyze"),
      story: {
        relativePath: "pages/features/nps/nps-feedback.mov",
      },
    },
  ];

  return (
    <HorizontalStoriesMenu
      title={t(
        "components.ui.extended.CustomerSatisfactionStories.customerSatisfaction"
      )}
      paragraph={t(
        "components.ui.extended.CustomerSatisfactionStories.paragraph"
      )}
      elements={elements}
      cta={{
        text: t(
          "components.ui.extended.CustomerSatisfactionStories.discoverMore"
        ),
        link: "/solutions/customer-satisfaction/",
      }}
    />
  );
};

export default CustomerSatisfactionStories;
