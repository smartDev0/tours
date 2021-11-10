import React from "react";
import InputCTA from "components/ui/base/InputCTA";
import { useTranslation } from "react-i18next";
import {
  StyledRegisterCTA,
  ValidationContainer,
  ValidationElement,
} from "./index.style";
import { Col } from "styled-bootstrap-grid";
import Icon from "components/core/Icon";
import { Justify } from "styled-bootstrap-grid/dist/components/Row/types";
import { useAddSubmission } from "networking/useSubmissions";
import { getTracking } from "utils/tracking";
import If from "components/core/If";
import { CTAColor } from "app-types/color";
import useEventSignUp from "events/useEventSignUp";
import { APP_URL } from "constants/paths";

export interface RegisterCTAProps {
  className?: string;
  justifyValidation?: Justify;
  hideValidationOnXl?: boolean;
  showValidation?: boolean;
  color?: CTAColor;
  id?: string;
}

const RegisterCTA = (props: RegisterCTAProps) => {
  const { t } = useTranslation();
  const addSubmission = useAddSubmission();
  const { fireEvent } = useEventSignUp();

  const onSubmit = (value: string) => {
    const extra = getTracking();

    return addSubmission(value, extra).then((data: any) => {
      fireEvent({ email: value }, () => {
        window.location.href = `${APP_URL}/registration/submission/${data.app_id}`;
      });
    });
  };

  return (
    <StyledRegisterCTA className={props.className}>
      <InputCTA
        placeholder={t("components.ui.extended.RegisterCTA.placeholder")}
        buttonText={t("components.ui.extended.RegisterCTA.buttonText")}
        onSubmit={onSubmit}
        inputType={"email"}
        color={props.color}
        id={props.id}
      />
      <If
        condition={props.showValidation !== undefined && props.showValidation}
      >
        <ValidationContainer
          justifyContent={
            props.justifyValidation ? props.justifyValidation : "center"
          }
        >
          <Col auto>
            <ValidationElement>
              <Icon type={"check"} size={16} />
              {t("components.ui.extended.RegisterCTA.noCreditCard")}
            </ValidationElement>
          </Col>
          <Col auto hiddenSmDown hiddenXlDown={props.hideValidationOnXl}>
            <ValidationElement>
              <Icon type={"check"} size={16} />{" "}
              {t("components.ui.extended.RegisterCTA.install60")}
            </ValidationElement>
          </Col>
          <Col auto>
            <ValidationElement>
              <Icon type={"check"} size={16} />{" "}
              {t("components.ui.extended.RegisterCTA.freePlan")}
            </ValidationElement>
          </Col>
        </ValidationContainer>
      </If>
    </StyledRegisterCTA>
  );
};

RegisterCTA.defaultProps = {
  showValidation: true,
  color: CTAColor.Yellow,
};

export default RegisterCTA;
