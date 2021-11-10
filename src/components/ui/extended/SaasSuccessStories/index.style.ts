import styled from "styled-components";
import { StyledTitle } from "components/core/Typography/Title/index.style";
import { StyledSuccessStory } from "components/ui/base/SuccessStory/index.style";
import { media } from "styled-bootstrap-grid";

const StyledSaasSuccessStories = styled.div`
  display: block;

  ${StyledTitle} {
    margin-top: 16px;
    margin-bottom: 0;
    text-align: center;
  }

  ${StyledSuccessStory} {
    ${media.md`
      padding: 32px 0;
    `}
  }
`;

export { StyledSaasSuccessStories };
