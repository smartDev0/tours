import React from "react";
import { useTranslation } from "react-i18next";
import FeatureGrid from "components/ui/base/FeatureGrid";

const MarketingAutomationFeatures = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t(
        "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.title"
      ),
      description: t(
        "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.MarketingAutomationFeatures.liveChatTools.title"
        ),
        relativePath:
          "components/features/marketing-automation/funnel-marketing-automation-icon.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.links.marketingFunnel"
          ),
          path: "/features/marketing-funnel/",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.links.funnelBuilder"
          ),
          path: "/features/marketing-funnel/#funnel-builder",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.links.funnelTemplates"
          ),
          path: "/features/marketing-funnel/#funnel-templates",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.links.automaticTagAssignment"
          ),
          path: "/features/marketing-funnel/#automatic-tag-assignment",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.marketingFunnel.links.segmentation"
          ),
          path: "/features/audience-segmentation/",
        },
      ],
    },
    {
      title: t(
        "components.ui.extended.MarketingAutomationFeatures.emailMarketing.title"
      ),
      description: t(
        "components.ui.extended.MarketingAutomationFeatures.emailMarketing.description"
      ),
      image: {
        alt: t(
          "components.ui.extended.MarketingAutomationFeatures.customerEngagement.title"
        ),
        relativePath:
          "components/features/marketing-automation/email-marketing-newsletter-icon.png",
      },
      links: [
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.emailMarketing"
          ),
          path: "/features/email-marketing/",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.visualTemplateBuilder"
          ),
          path: "/features/email-template-builder/",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.html"
          ),
          path: "/features/email-template-builder/#html-editor",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.deliveryRate"
          ),
          path: "/features/email-marketing/#delivery-rate",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.templateManager"
          ),
          path: "/features/email-marketing/#template-manager",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.campaignInsights"
          ),
          path: "/features/email-marketing/#campaign-insights",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.userDetailedReporting"
          ),
          path: "/features/email-marketing/#user-detail-reporting",
        },
        {
          text: t(
            "components.ui.extended.MarketingAutomationFeatures.emailMarketing.links.segmentation"
          ),
          path: "/features/audience-segmentation/",
        },
      ],
    },
  ];

  return <FeatureGrid title={"Marketing Automation"} sections={sections} />;
};

export default MarketingAutomationFeatures;
