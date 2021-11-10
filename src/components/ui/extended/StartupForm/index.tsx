import React from "react";
import FormSteps, {
  FormStepsCallbackProps,
} from "components/ui/base/FormSteps";
import { useTranslation } from "react-i18next";
import useEventLeadGenerated from "events/useEventLeadGenerated";

const StartupForm = () => {
  const { t } = useTranslation();
  const { fireEvent } = useEventLeadGenerated();

  return (
    <FormSteps
      id={"startupForm"}
      ctaButtonText={t("components.ui.extended.StartupForm.ctaContinue")}
      ctaCompleteButtonText={t(
        "components.ui.extended.StartupForm.ctaComplete"
      )}
      completeStep={{
        text: t("components.ui.extended.StartupForm.completeMessage"),
        emoji: "🙏",
      }}
      onSendStep={({ step }: FormStepsCallbackProps) => {
        fireEvent({ step });
      }}
      steps={[
        {
          title: t("components.ui.extended.StartupForm.1.title"),
          elements: [
            {
              name: "name",
              type: "text",
              placeholder: t(
                "components.ui.extended.StartupForm.1.elements.1.placeholder"
              ),
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: t(
                "components.ui.extended.StartupForm.1.elements.2.placeholder"
              ),
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.StartupForm.2.title"),
          elements: [
            {
              name: "company_role",
              type: "select",
              placeholder: t(
                "components.ui.extended.StartupForm.2.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.ceo"
                  ),
                  name: "ceo",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.cto"
                  ),
                  name: "cto",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.marketingManager"
                  ),
                  name: "marketingManager",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.customerSuccess"
                  ),
                  name: "customerSuccess",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.advisor"
                  ),
                  name: "advisor",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.investor"
                  ),
                  name: "investor",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.developer"
                  ),
                  name: "developer",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.2.elements.1.options.other"
                  ),
                  name: "other",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.StartupForm.3.title"),
          elements: [
            {
              name: "team_size",
              type: "select",
              placeholder: t(
                "components.ui.extended.StartupForm.3.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.3.elements.1.options.onlyMe"
                  ),
                  name: "me",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.3.elements.1.options.1to5"
                  ),
                  name: "1-5",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.3.elements.1.options.5plus"
                  ),
                  name: "5+",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.3.elements.1.options.10plus"
                  ),
                  name: "10+",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.3.elements.1.options.50plus"
                  ),
                  name: "50+",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.StartupForm.4.title"),
          elements: [
            {
              name: "industry",
              type: "select",
              placeholder: t(
                "components.ui.extended.StartupForm.4.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.saas"
                  ),
                  name: "saas",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.ecommerce"
                  ),
                  name: "ecommerce",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.aiBiotech"
                  ),
                  name: "ai-biotech",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.fintech"
                  ),
                  name: "fintech",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.agritech"
                  ),
                  name: "agritech",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.social"
                  ),
                  name: "social",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.travel"
                  ),
                  name: "travel",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.foodDrink"
                  ),
                  name: "food-and-drink",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.retail"
                  ),
                  name: "retail-and-fashion",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.4.elements.1.options.medtech"
                  ),
                  name: "medtech",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.StartupForm.5.title"),
          elements: [
            {
              name: "domain",
              type: "text",
              placeholder: t(
                "components.ui.extended.StartupForm.5.elements.1.placeholder"
              ),
              required: true,
            },
            {
              name: "funding",
              type: "text",
              placeholder: t(
                "components.ui.extended.StartupForm.5.elements.2.placeholder"
              ),
              required: true,
            },
            {
              name: "list_size",
              type: "text",
              placeholder: t(
                "components.ui.extended.StartupForm.5.elements.3.placeholder"
              ),
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.StartupForm.6.title"),
          elements: [
            {
              name: "needs",
              type: "checkbox",
              options: [
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.6.elements.1.options.support"
                  ),
                  name: "support",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.6.elements.1.options.newsletter"
                  ),
                  name: "newsletter",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.6.elements.1.options.funnels"
                  ),
                  name: "funnels",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.6.elements.1.options.surveys"
                  ),
                  name: "surveys",
                },
                {
                  displayName: t(
                    "components.ui.extended.StartupForm.6.elements.1.options.nps"
                  ),
                  name: "nps",
                },
              ],
              required: true,
            },
          ],
        },
      ]}
      emailStepName={"email"}
    />
  );
};

export default StartupForm;
