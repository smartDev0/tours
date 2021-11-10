import React from "react";
import FormSteps, {
  FormStepsCallbackProps,
} from "components/ui/base/FormSteps";
import { useTranslation } from "react-i18next";
import useEventLeadGenerated from "events/useEventLeadGenerated";

const AgenciesForm = () => {
  const { t } = useTranslation();
  const { fireEvent } = useEventLeadGenerated();

  return (
    <FormSteps
      id={"partnerForm"}
      ctaButtonText={t("components.ui.extended.AgenciesForm.ctaContinue")}
      ctaCompleteButtonText={t(
        "components.ui.extended.AgenciesForm.ctaComplete"
      )}
      completeStep={{
        text: t("components.ui.extended.AgenciesForm.completeMessage"),
        emoji: "🙏",
      }}
      onSendStep={({ step }: FormStepsCallbackProps) => {
        fireEvent({ step });
      }}
      steps={[
        {
          title: t("components.ui.extended.AgenciesForm.1.title"),
          elements: [
            {
              name: "name",
              type: "text",
              placeholder: t(
                "components.ui.extended.AgenciesForm.1.elements.1.placeholder"
              ),
              required: true,
            },
            {
              name: "agency_name",
              type: "text",
              placeholder: t(
                "components.ui.extended.AgenciesForm.1.elements.2.placeholder"
              ),
              required: true,
            },
            {
              name: "email",
              type: "email",
              placeholder: t(
                "components.ui.extended.AgenciesForm.1.elements.3.placeholder"
              ),
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.2.title"),
          elements: [
            {
              name: "company_role",
              type: "select",
              placeholder: t(
                "components.ui.extended.AgenciesForm.2.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.ceo"
                  ),
                  name: "ceo",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.cto"
                  ),
                  name: "cto",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.marketingManager"
                  ),
                  name: "marketingManager",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.customerSuccess"
                  ),
                  name: "customerSuccess",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.advisor"
                  ),
                  name: "advisor",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.investor"
                  ),
                  name: "investor",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.developer"
                  ),
                  name: "developer",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.2.elements.1.options.other"
                  ),
                  name: "other",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.3.title"),
          elements: [
            {
              name: "team_size",
              type: "select",
              placeholder: t(
                "components.ui.extended.AgenciesForm.3.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.3.elements.1.options.onlyMe"
                  ),
                  name: "me",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.3.elements.1.options.1to5"
                  ),
                  name: "1-5",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.3.elements.1.options.5plus"
                  ),
                  name: "5+",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.3.elements.1.options.10plus"
                  ),
                  name: "10+",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.3.elements.1.options.50plus"
                  ),
                  name: "50+",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.4.title"),
          elements: [
            {
              name: "reason",
              type: "select",
              placeholder: t(
                "components.ui.extended.AgenciesForm.4.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.4.elements.1.options.value"
                  ),
                  name: "giveValue",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.4.elements.1.options.revenue"
                  ),
                  name: "revenue",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.4.elements.1.options.learning"
                  ),
                  name: "learning",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.5.title"),
          elements: [
            {
              name: "revenue",
              type: "select",
              placeholder: t(
                "components.ui.extended.AgenciesForm.5.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.5.elements.1.options.launch"
                  ),
                  name: "launch",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.5.elements.1.options.0to50"
                  ),
                  name: "0-$50K",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.5.elements.1.options.50to100"
                  ),
                  name: "$50K-$100K",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.5.elements.1.options.100to500"
                  ),
                  name: "$100K-$500K",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.5.elements.1.options.500plus"
                  ),
                  name: "$500K+",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.6.title"),
          elements: [
            {
              name: "customerbase",
              type: "select",
              placeholder: t(
                "components.ui.extended.AgenciesForm.6.elements.1.placeholder"
              ),
              options: [
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.6.elements.1.options.1"
                  ),
                  name: "1",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.6.elements.1.options.2to5"
                  ),
                  name: "2-5",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.6.elements.1.options.6to10"
                  ),
                  name: "6-10",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.6.elements.1.options.10plus"
                  ),
                  name: "10+",
                },
                {
                  displayName: t(
                    "components.ui.extended.AgenciesForm.6.elements.1.options.20plus"
                  ),
                  name: "20+",
                },
              ],
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.7.title"),
          elements: [
            {
              name: "domain",
              type: "text",
              placeholder: t(
                "components.ui.extended.AgenciesForm.7.elements.1.placeholder"
              ),
              required: true,
            },
          ],
        },
        {
          title: t("components.ui.extended.AgenciesForm.8.title"),
          elements: [
            {
              name: "cly_account_email",
              type: "email",
              placeholder: t(
                "components.ui.extended.AgenciesForm.8.elements.1.placeholder"
              ),
              required: true,
            },
          ],
        },
      ]}
      emailStepName={"email"}
    />
  );
};

export default AgenciesForm;
