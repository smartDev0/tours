import { useEffect, useState } from "react";

type ScrollType = {
  scrollX?: number;
  scrollY?: number;
};

const useScroll = (): ScrollType => {
  const [scroll, setScroll] = useState<ScrollType>({
    scrollX: undefined,
    scrollY: undefined,
  });

  const scrollHandler = () => {
    const supportPageOffset =
      window !== undefined && window.pageXOffset !== undefined;
    const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    const scrollX = supportPageOffset
      ? window.pageXOffset
      : isCSS1Compat
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
    const scrollY = supportPageOffset
      ? window.pageYOffset
      : isCSS1Compat
      ? document.documentElement.scrollTop
      : document.body.scrollTop;

    setScroll({ scrollX, scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return scroll;
};

export default useScroll;
