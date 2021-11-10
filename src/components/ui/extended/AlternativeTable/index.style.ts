import styled from "styled-components";
import { Title } from "components/core/Typography/Title";
import { StyledHeading } from "components/core/Typography/Heading/index.style";
import { media } from "styled-bootstrap-grid";

export interface TableCellProps {
  feature?: boolean;
  customerly?: boolean;
  head?: boolean;
}

const StyledAlternativeTable = styled.section``;

const CenteredTitle = styled(Title)`
  text-align: center;
`;

const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  max-width: 1100px;
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  background: transparent;
`;

const TableCell = styled.div<TableCellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(33.33% - 1px);
  box-sizing: border-box;
  flex-grow: 1;
  padding: 0.8em 1.2em;
  overflow: hidden;
  list-style-type: none;
  text-align: center;
  font-weight: 300;
  font-size: 20px;
  color: ${(props) => props.theme.titleColor};
  border-bottom: 1px solid ${(props) => props.theme.baseLightColor};
  background: ${(props) =>
    props.head
      ? props.theme.baseLighten85Color
      : props.theme.baseLighten95Color};

  ${StyledHeading} {
    color: ${(props) => props.theme.titleColor};
    font-size: 1.2em;
  }

  &:first-child {
    border: none;
    background: transparent;
    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  &:nth-last-child(-n + 3) {
    border-bottom: none;
  }

  ${media.lg`
    &:nth-child(2) {
      border-radius: ${(props: any) => props.theme.borderRadius} 0 0 0;
    }

    &:nth-child(4) {
          border-radius: ${(props: any) => props.theme.borderRadius} 0 0 0;
    }
  `}

  ${(props) =>
    props.customerly &&
    `
    background: ${
      props.head
        ? props.theme.accentLighten80Color
        : props.theme.accentLighten90Color
    };
    `}

  ${(props) =>
    props.feature &&
    `
    font-size: 18px;
    
    @media only screen and (max-width: 768px) {
      width: 100%;
      border-bottom: none;
      background: transparent;
    }
  `};
`;

export { StyledAlternativeTable, CenteredTitle, Table, TableCell };
