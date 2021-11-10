import React, { ReactChild } from "react";
import Footer from "components/ui/extended/Layout/Footer";
import Header from "components/ui/extended/BlogLayout/Header";

interface BlogLayoutProps {
  children: ReactChild | ReactChild[];
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  );
};

BlogLayout.defaultProps = {};

export default BlogLayout;
