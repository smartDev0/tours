import styled from "styled-components";
import { media } from "styled-bootstrap-grid";

const StyledBreadcrumbs = styled.section``;

const BreadcrumbsUl = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const BreadcrumbsLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${(props) => props.theme.baseColor};
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 400;

    ${media.lg`
      font-size: 12px;
    `}
  }
`;

export { StyledBreadcrumbs, BreadcrumbsUl, BreadcrumbsLi };
