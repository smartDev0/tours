import React from "react";
import { useTranslation } from "react-i18next";
import TabsWithImage from "components/ui/base/TabsWithImage";

const ConversationInboxEcommerceTabs = () => {
  const { t } = useTranslation();

  return (
    <TabsWithImage
      tabs={[
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.1.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.1.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.1.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/live-chat-inboxes.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.2.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.2.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.2.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/live-chat-team-conversations.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.3.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.3.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.3.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/live-chat-conversation-messages.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.4.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.4.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.4.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/message-reply-rich-text-live-chat.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.5.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.5.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.5.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/live-chat-canned-responses.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.6.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.6.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.6.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/help-center-live-chat-replies.png",
        },
        {
          name: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.7.name`
          ),
          title: t(
            `components.ui.extended.ConversationInboxEcommerceTabs.7.title`
          ),
          description: t(
            "components.ui.extended.ConversationInboxEcommerceTabs.7.description"
          ),
          relativePath:
            "components/conversation-inbox-tabs/live-chat-crm-user-data.png",
        },
      ]}
    />
  );
};

export default ConversationInboxEcommerceTabs;
