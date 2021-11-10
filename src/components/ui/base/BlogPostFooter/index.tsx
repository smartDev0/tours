import React from "react";
import {
  AuthorDescription,
  AuthorImage,
  CenteredCol,
  Description,
  StyledBlogPostFooter,
  TextCol,
} from "./index.style";
import Heading from "components/core/Typography/Heading";
import { Container, Row } from "styled-bootstrap-grid";
import SafeLink from "components/core/SafeLink";
import { getBlogPath } from "utils/path";

interface BlogPostFooterProps {
  name: string;
  authorDescription: string;
  uri: string;
  description: string;
  img: string;
}

const BlogPostFooter = (props: BlogPostFooterProps) => {
  return (
    <StyledBlogPostFooter>
      <Container>
        <Row>
          <CenteredCol md={4}>
            <SafeLink to={getBlogPath(props.uri)}>
              <AuthorImage src={props.img} alt={props.name} />
            </SafeLink>
          </CenteredCol>
          <TextCol md={8}>
            <SafeLink to={getBlogPath(props.uri)}>
              <Heading level={2}>{props.name}</Heading>
            </SafeLink>
            <AuthorDescription>{props.authorDescription}</AuthorDescription>
            <Description>{props.description}</Description>
          </TextCol>
        </Row>
      </Container>
    </StyledBlogPostFooter>
  );
};

export default BlogPostFooter;
