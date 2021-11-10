import React from "react";
import { useTranslation } from "react-i18next";
import FeatureGrid from "components/ui/base/FeatureGrid";

export interface CustomerServiceFeaturesProps {
  customTitle?: string;
}

const CustomerServiceFeatures = ({
  customTitle,
}: CustomerServiceFeaturesProps) => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t(
        "components.ui.extended.CustomerServiceFeatures.liveChatTools.title"
      ),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.liveChatTools.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerServiceFeatures.liveChatTools.title"
        ),
        relativePath: "icons/live-chat.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.liveChat"
          ),
          path: "/features/live-chat/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.videoLiveChat"
          ),
          path: "/features/video-live-chat/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.screenShare"
          ),
          path: "/features/video-live-chat/#screen-share",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.typingPreviews"
          ),
          path: "/features/live-chat/#chat-previews",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.cannedResponses"
          ),
          path: "/features/live-chat/#canned-responses",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.richMessages"
          ),
          path: "/features/live-chat/#rich-messages",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.fileSharing"
          ),
          path: "/features/live-chat/#file-sharing",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.chatArchives"
          ),
          path: "/features/live-chat/#chat-archives",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.conversationInbox"
          ),
          path: "/features/conversation-inbox/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.liveChatTools.links.notifications"
          ),
          path: "/features/live-chat/#chat-notifications",
        },
      ],
    },
    {
      title: t(
        "components.ui.extended.CustomerServiceFeatures.customerEngagement.title"
      ),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.customerEngagement.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerServiceFeatures.customerEngagement.title"
        ),
        relativePath: "icons/live-chat-customer-engagement.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.engagement"
          ),
          path: "/features/live-chat-engagement/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.welcomeMessage"
          ),
          path: "/features/live-chat-engagement/#welcome-message",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.preChatSurveys"
          ),
          path: "/features/live-chat-engagement/#pre-chat-survey",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.smartAssignmentRules"
          ),
          path: "/features/smart-assignment-rules/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.bookMeeting"
          ),
          path: "/features/live-chat-engagement/#book-meeting",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customerEngagement.links.helpCenter"
          ),
          path: "/features/live-chat-engagement/#help-center",
        },
      ],
    },
    {
      title: t(
        "components.ui.extended.CustomerServiceFeatures.customization.title"
      ),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.customization.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerServiceFeatures.customization.title"
        ),
        relativePath: "icons/live-chat-customizations.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.customization"
          ),
          path: "/features/live-chat-customization/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.brandMatching"
          ),
          path: "/features/live-chat-customization/#brand-matching",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.chatIcons"
          ),
          path: "/features/live-chat-customization/#chat-icons",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.agentProfiles"
          ),
          path: "/features/live-chat-customization/#agent-profiles",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.companyIntro"
          ),
          path: "/features/live-chat-customization/#company-intro",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.customization.links.languages"
          ),
          path: "/features/live-chat-customization/#chat-languages",
        },
      ],
    },
    {
      title: t(
        "components.ui.extended.CustomerServiceFeatures.helpCenter.title"
      ),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.helpCenter.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerServiceFeatures.helpCenter.title"
        ),
        relativePath: "icons/help-center-software.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.helpCenter"
          ),
          path: "/features/help-center/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.autoReply"
          ),
          path: "/features/help-center/#chat-auto-reply",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.inChatSearch"
          ),
          path: "/features/help-center/#inchat-search",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.articleEditor"
          ),
          path: "/features/help-center/#article-editor",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.googleTagManager"
          ),
          path: "/features/help-center/#google-tag-manager",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.helpCenter.links.articleFeedback"
          ),
          path: "/features/help-center/#article-feedback",
        },
      ],
    },
    {
      title: t(
        "components.ui.extended.CustomerServiceFeatures.analytics.title"
      ),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.analytics.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.CustomerServiceFeatures.analytics.title"
        ),
        relativePath: "icons/live-chat-team-reports.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.analytics.links.teamReports"
          ),
          path: "/features/team-reports/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.analytics.links.chatReports"
          ),
          path: "/features/team-reports/#chat-reports",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.analytics.links.agentReports"
          ),
          path: "/features/team-reports/#agent-reports",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.analytics.links.helpCenterReports"
          ),
          path: "/features/team-reports/#help-center-reports",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.analytics.links.failedSearchesReports"
          ),
          path: "/features/team-reports/#failed-searches-reports",
        },
      ],
    },
    {
      title: t("components.ui.extended.CustomerServiceFeatures.nerds.title"),
      description: t(
        "components.ui.extended.CustomerServiceFeatures.nerds.description"
      ),
      image: {
        alt: t("components.ui.extended.CustomerServiceFeatures.nerds.title"),
        relativePath: "icons/live-chat-for-developers.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.nerds.links.api"
          ),
          path: "/features/live-chat-api/",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.nerds.links.callbacks"
          ),
          path: "/features/live-chat-api/#callbacks",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.nerds.links.events"
          ),
          path: "/features/live-chat-api/#event-tracking",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.nerds.links.attributes"
          ),
          path: "/features/live-chat-api/#user-properties",
        },
        {
          text: t(
            "components.ui.extended.CustomerServiceFeatures.nerds.links.userAuthentication"
          ),
          path: "/features/live-chat-api/#user-authentication",
        },
      ],
    },
  ];

  return (
    <FeatureGrid
      title={
        customTitle
          ? customTitle
          : t("components.ui.extended.CustomerServiceFeatures.title")
      }
      sections={sections}
    />
  );
};

export default CustomerServiceFeatures;
