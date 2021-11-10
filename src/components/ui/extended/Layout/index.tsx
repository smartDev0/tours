import React, { ReactChild, ReactElement } from "react";
import Header from "components/ui/extended/Layout/Header";
import Footer from "components/ui/extended/Layout/Footer";

interface LayoutProps {
  alternativeColors?: boolean;
  children: ReactChild | ReactChild[];
  withCta?: boolean;
  withMenu?: boolean;
  clickableLogo?: boolean;
  ctaFocusId?: string;
  mobileCta?: boolean;
  withFooter?: boolean;
  location: Location;
}

const Layout = ({
  alternativeColors,
  children,
  withCta,
  withMenu,
  clickableLogo,
  ctaFocusId,
  mobileCta,
  withFooter,
  location,
}: LayoutProps) => {
  const getLocationClonedChild = (
    child: ReactElement,
    index?: number
  ): ReactChild => {
    return React.cloneElement(child, { location, key: index });
  };

  return (
    <>
      <Header
        alternativeColors={alternativeColors}
        withCta={withCta}
        withMenu={withMenu}
        clickableLogo={clickableLogo}
        ctaFocusId={ctaFocusId}
        mobileCta={mobileCta}
        location={location}
      />

      {children.constructor === Array
        ? children.map((child, i) =>
            getLocationClonedChild(child as ReactElement, i)
          )
        : getLocationClonedChild(children as ReactElement)}

      {withFooter ? <Footer /> : <></>}
    </>
  );
};

Layout.defaultProps = {
  withCta: true,
  withFooter: true,
  alternativeColors: false,
};

export default Layout;
