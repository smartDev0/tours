import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  ButtonCol,
  CompleteDiv,
  Emoji,
  Form,
  FormCol,
  FormHeading,
  FormStep,
  HeadingCol,
  MainCol,
  NextButton,
  OuterContainer,
  ProgressBar,
  ProgressBarOuter,
  ProgressBarWrapper,
  RadioContainer,
  RadioContainerWrapper,
  RadioDiv,
  SelectDiv,
  StyledFormSteps,
  WrapperContainer,
} from "./index.style";
import Input from "components/core/Input";
import Fade from "components/core/Animation/extended/Fade";
import { useSendForm } from "networking/useForms";
import Tooltip from "components/core/Tooltip";
import Heading from "components/core/Typography/Heading";

export interface FormSteps {
  title?: string;
  elements: FormStepsElement[];
}

export interface FormStepsCallbackProps {
  fieldsRef: any;
  step: string;
}

export interface FormStepsElement {
  name: string;
  type: "text" | "email" | "select" | "radio" | "checkbox";
  required: boolean;
  options?: {
    name: string;
    displayName: string;
  }[];
  placeholder?: string;
}

export interface FormStepsProps {
  title?: string;
  id?: string;
  steps: FormSteps[];
  emailStepName: string;
  ctaButtonText: string;
  ctaCompleteButtonText?: string;
  completeStep: {
    text: string;
    emoji?: string;
  };
  onSendStep?: Function;
  onComplete?: Function;
}

export interface FormField {
  name: string;
  value?: string;
  error?: {
    text?: string;
    show: boolean;
  };
}

const FormSteps = (props: FormStepsProps) => {
  const [fields, setFields] = useState<FormField[]>([]);
  const fieldsRef = React.useRef<FormField[]>(fields);
  const [stepIndex, setStepIndex] = useState<number>(0);
  const totalSteps = props.steps.length;
  const form = useRef<HTMLFormElement>(null);
  const sendForm = useSendForm();

  const getFieldError = (name: string) => {
    const error = fields.find((field) => field.name === name)?.error;
    return error ? error : { show: false };
  };

  const setFieldError = (name: string, text: string) => {
    const newFields = [...fields];

    const oldField = newFields.find((field) => field.name === name);

    if (oldField) {
      oldField.error = {
        text,
        show: true,
      };
    } else {
      newFields.push({
        name,
        error: {
          text,
          show: true,
        },
      });
    }

    setFields(newFields);
    fieldsRef.current = newFields;
  };

  const getFieldValue = (name: string): string | undefined => {
    return fields.find((field) => field.name === name)?.value;
  };

  const setFieldValue = (name: string, value: string) => {
    const newFields = [...fields];
    const oldField = newFields.find((field) => field.name === name);

    if (oldField) {
      oldField.error = {
        ...oldField.error,
        show: false,
      };
      oldField.value = value;
    } else {
      newFields.push({
        name,
        value,
        error: {
          show: false,
        },
      });
    }

    setFields(newFields);
    fieldsRef.current = newFields;
  };

  const onCheckboxChange = (e: any, name: string) => {
    const selectedItemsString = getFieldValue(name);
    const selectedItems =
      selectedItemsString === undefined ? [] : selectedItemsString.split(",");

    if (e.target.checked) {
      selectedItems.push(e.target.value);
    } else {
      const index = selectedItems.indexOf(e.target.value);

      if (index > -1) {
        selectedItems.splice(index, 1);
      }
    }

    setFieldValue(name, selectedItems.join(","));
  };

  const isCheckboxChecked = (name: string, checkName: string): boolean => {
    const fieldValue = getFieldValue(name);

    return (
      fieldValue !== undefined && fieldValue.split(",").includes(checkName)
    );
  };

  const onSendForm = () => {
    const sendBody: { [name: string]: string } = {};
    fieldsRef.current?.forEach((field) => {
      if (field.value != null) {
        sendBody[field.name] = field.value;
      }
    });
    const email = sendBody[props.emailStepName];
    delete sendBody[props.emailStepName];

    sendForm(email, sendBody).then(() => {});
  };

  const onStep = () => {
    props.onSendStep &&
      props.onSendStep({
        fieldsRef,
        step: stepIndex >= totalSteps - 1 ? "complete" : stepIndex.toString(),
      });
  };

  const onComplete = () => {
    props.onComplete && props.onComplete({ fieldsRef, step: "complete" });
  };

  const handleNextStep = () => {
    if (checkFormValidity()) {
      onStep();
      onSendForm();
      setStepIndex(stepIndex + 1);

      if (stepIndex >= totalSteps - 1) {
        onComplete();
      }
    }
  };

  const checkFormValidity = (): boolean => {
    if (form.current) {
      let isValid = true;

      const formElements = form.current?.querySelectorAll(
        "input:not([disabled]), select:not([disabled])"
      );

      Array.from(formElements).forEach((element) => {
        if (!(element as any).validity.valid) {
          setFieldError(
            (element as any).name,
            (element as any).validationMessage
          );
        }
        isValid = isValid && (element as any).validity.valid;
      });

      return isValid;
    } else {
      return false;
    }
  };

  const handleEnterClick = (event: KeyboardEvent) => {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();

      const formElements = form.current?.querySelectorAll("input, select");
      if (formElements) {
        const element: any = event.target;

        const index = Array.from(formElements).indexOf(element);
        if (index !== undefined) {
          if (index < formElements.length - 1) {
            const nextElement = formElements.item(index + 1);
            if ((nextElement as any).disabled) {
              handleNextStep();
            }
            (nextElement as any).focus();
          } else {
            handleNextStep();
          }
        }
      }
    }
  };

  useEffect(() => {
    form.current?.addEventListener("keyup", handleEnterClick);

    return () => {
      form.current?.removeEventListener("keyup", handleEnterClick);
    };
  }, [stepIndex]);

  return (
    <StyledFormSteps id={props.id}>
      <MediumComponentContainer>
        <Fade direction={"up"}>
          <OuterContainer>
            <WrapperContainer>
              <PageContainer>
                <Container>
                  <Row>
                    <MainCol active={stepIndex < totalSteps}>
                      <Row>
                        <HeadingCol>
                          {props.steps.map((step, index) => {
                            return (
                              <Fade
                                direction={"left"}
                                show={index === stepIndex}
                                duration={300}
                                key={index}
                              >
                                <FormHeading level={2} weight={600}>
                                  {step.title}
                                </FormHeading>
                              </Fade>
                            );
                          })}
                        </HeadingCol>
                      </Row>
                      <Row justifyContent={"center"}>
                        <FormCol lg={5} md={6} sm={8}>
                          <Form ref={form} active={stepIndex < totalSteps}>
                            {props.steps.map((step, index) => {
                              const active =
                                index === stepIndex ||
                                (index === stepIndex - 1 &&
                                  stepIndex >= totalSteps);
                              return (
                                <FormStep key={index} active={active}>
                                  {step.elements.map((element, i) => {
                                    const error = getFieldError(element.name);

                                    switch (element.type) {
                                      case "text":
                                        return (
                                          <Tooltip
                                            type={"custom"}
                                            show={error.show}
                                            content={error.text}
                                            key={i}
                                          >
                                            <Input
                                              name={element.name}
                                              type="text"
                                              placeholder={element.placeholder}
                                              onChange={(e: any) =>
                                                setFieldValue(
                                                  element.name,
                                                  e.target.value
                                                )
                                              }
                                              value={getFieldValue(
                                                element.name
                                              )}
                                              required={element.required}
                                              disabled={!active}
                                            />
                                          </Tooltip>
                                        );
                                      case "email":
                                        return (
                                          <Tooltip
                                            type={"custom"}
                                            show={error.show}
                                            content={error.text}
                                            key={i}
                                          >
                                            <Input
                                              name={element.name}
                                              type="email"
                                              placeholder={element.placeholder}
                                              onChange={(e: any) =>
                                                setFieldValue(
                                                  element.name,
                                                  e.target.value
                                                )
                                              }
                                              value={getFieldValue(
                                                element.name
                                              )}
                                              required={element.required}
                                              disabled={!active}
                                            />
                                          </Tooltip>
                                        );
                                      case "radio":
                                        return (
                                          <Tooltip
                                            type={"custom"}
                                            show={error.show}
                                            content={error.text}
                                            key={i}
                                          >
                                            <RadioDiv>
                                              {element.placeholder && (
                                                <label>
                                                  {element.placeholder}
                                                </label>
                                              )}
                                              <RadioContainerWrapper>
                                                {element.options?.map(
                                                  (option, y) => {
                                                    return (
                                                      <RadioContainer key={y}>
                                                        <Input
                                                          name={element.name}
                                                          type="radio"
                                                          placeholder={
                                                            option.displayName
                                                          }
                                                          value={option.name}
                                                          id={option.name}
                                                          onChange={(e: any) =>
                                                            setFieldValue(
                                                              element.name,
                                                              e.target.value
                                                            )
                                                          }
                                                          checked={
                                                            getFieldValue(
                                                              element.name
                                                            ) === option.name
                                                          }
                                                          required={
                                                            element.required
                                                          }
                                                          disabled={!active}
                                                        />
                                                        <label
                                                          htmlFor={option.name}
                                                        >
                                                          {option.displayName}
                                                        </label>
                                                      </RadioContainer>
                                                    );
                                                  }
                                                )}
                                              </RadioContainerWrapper>
                                            </RadioDiv>
                                          </Tooltip>
                                        );
                                      case "select":
                                        return (
                                          <Tooltip
                                            key={i}
                                            type={"custom"}
                                            show={error.show}
                                            content={error.text}
                                          >
                                            <SelectDiv>
                                              <select
                                                name={element.name}
                                                id={element.name}
                                                onChange={(e: any) =>
                                                  setFieldValue(
                                                    element.name,
                                                    e.target.value
                                                  )
                                                }
                                                value={getFieldValue(
                                                  element.name
                                                )}
                                                required={element.required}
                                                defaultValue=""
                                                disabled={!active}
                                              >
                                                <option value="" disabled>
                                                  {element.placeholder}
                                                </option>
                                                {element.options?.map(
                                                  (option, y) => {
                                                    return (
                                                      <option
                                                        value={option.name}
                                                        key={y}
                                                      >
                                                        {option.displayName}
                                                      </option>
                                                    );
                                                  }
                                                )}
                                              </select>
                                            </SelectDiv>
                                          </Tooltip>
                                        );
                                      case "checkbox":
                                        return (
                                          <Tooltip
                                            type={"custom"}
                                            key={i}
                                            show={error.show}
                                            content={error.text}
                                          >
                                            <RadioDiv>
                                              {element.placeholder && (
                                                <label>
                                                  {element.placeholder}
                                                </label>
                                              )}
                                              <RadioContainerWrapper>
                                                {element.options?.map(
                                                  (option, y) => {
                                                    return (
                                                      <RadioContainer key={y}>
                                                        <Input
                                                          name={element.name}
                                                          type="checkbox"
                                                          placeholder={
                                                            option.displayName
                                                          }
                                                          value={option.name}
                                                          id={option.name}
                                                          onChange={(e: any) =>
                                                            onCheckboxChange(
                                                              e,
                                                              element.name
                                                            )
                                                          }
                                                          checked={isCheckboxChecked(
                                                            element.name,
                                                            option.name
                                                          )}
                                                          disabled={!active}
                                                        />
                                                        <label
                                                          htmlFor={option.name}
                                                        >
                                                          {option.displayName}
                                                        </label>
                                                      </RadioContainer>
                                                    );
                                                  }
                                                )}
                                              </RadioContainerWrapper>
                                            </RadioDiv>
                                          </Tooltip>
                                        );
                                    }
                                  })}
                                </FormStep>
                              );
                            })}
                          </Form>
                        </FormCol>
                      </Row>
                      <Row justifyContent={"center"}>
                        <ButtonCol lg={5} md={6} sm={8}>
                          <NextButton
                            fullWidth
                            onClick={handleNextStep}
                            icon={{
                              type: "arrow-right",
                            }}
                            active={stepIndex <= totalSteps - 1}
                          >
                            {stepIndex === totalSteps - 1 &&
                            props.ctaCompleteButtonText
                              ? props.ctaCompleteButtonText
                              : props.ctaButtonText}
                          </NextButton>
                        </ButtonCol>
                      </Row>
                    </MainCol>
                    <MainCol active={stepIndex >= totalSteps}>
                      <CompleteDiv>
                        {props.completeStep.emoji && (
                          <Emoji>{props.completeStep.emoji}</Emoji>
                        )}
                        <Heading level={3} weight={600}>
                          {props.completeStep.text}
                        </Heading>
                      </CompleteDiv>
                    </MainCol>
                  </Row>
                  <Row justifyContent={"center"}>
                    <Col lg={5} md={6} sm={8}>
                      <ProgressBarOuter active={stepIndex < totalSteps}>
                        <ProgressBarWrapper>
                          <ProgressBar
                            progress={
                              stepIndex / totalSteps === 0
                                ? 0.02
                                : stepIndex / totalSteps
                            }
                          />
                        </ProgressBarWrapper>
                      </ProgressBarOuter>
                    </Col>
                  </Row>
                </Container>
              </PageContainer>
            </WrapperContainer>
          </OuterContainer>
        </Fade>
      </MediumComponentContainer>
    </StyledFormSteps>
  );
};

export default FormSteps;
