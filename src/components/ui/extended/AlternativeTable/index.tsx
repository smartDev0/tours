import React from "react";
import { MediumComponentContainer, PageContainer } from "styles/global.style";
import {
  CenteredTitle,
  StyledAlternativeTable,
  Table,
  TableCell,
} from "components/ui/extended/AlternativeTable/index.style";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "styled-bootstrap-grid";
import Heading from "components/core/Typography/Heading";
import Fade from "components/core/Animation/extended/Fade";
import { AlternativeTableElement } from "app-types/alternative";

export interface AlternativeTableProps {
  subtitle?: string;
  alternative: string;
  rows: AlternativeTableElement[];
}

const AlternativeTable = (props: AlternativeTableProps) => {
  const { t } = useTranslation();
  return (
    <StyledAlternativeTable>
      <MediumComponentContainer>
        <PageContainer>
          <Container>
            <Row>
              <Col>
                <Fade direction={"up"}>
                  <CenteredTitle>
                    {t("components.ui.extended.AlternativeTable.title", {
                      alternative: props.alternative,
                    })}
                  </CenteredTitle>
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col>
                <Fade direction={"up"} delay={200}>
                  <Table>
                    <TableCell />
                    <TableCell customerly head>
                      <Heading level={3} weight={600}>
                        Customerly
                      </Heading>
                    </TableCell>
                    <TableCell head>
                      <Heading level={3}>{props.alternative}</Heading>
                    </TableCell>
                    {props.rows &&
                      props.rows.map((row, i) => {
                        return (
                          <React.Fragment key={i}>
                            <TableCell feature>{row.feature}</TableCell>
                            <TableCell customerly>{row.customerly}</TableCell>
                            <TableCell>{row.alternative}</TableCell>
                          </React.Fragment>
                        );
                      })}
                  </Table>
                </Fade>
              </Col>
            </Row>
          </Container>
        </PageContainer>
      </MediumComponentContainer>
    </StyledAlternativeTable>
  );
};

export default AlternativeTable;
