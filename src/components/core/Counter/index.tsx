import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";

export interface CounterProps {
  from: number;
  to: number;
  fixed?: number;
  duration: number;
  thousandsSeparators?: boolean;
  locale?: string;
}

const getNumberWithCommas = (n: number, fixed: number, locale?: string) => {
  return n
    .toFixed(fixed)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, locale === "it" ? "." : ",");
};

const Counter = ({
  from,
  to,
  fixed = 0,
  duration,
  thousandsSeparators,
  locale,
}: CounterProps) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { countUp, start } = useCountUp({
    start: from,
    end: to,
    startOnMount: false,
    duration: duration,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView]);

  return (
    <span ref={ref}>
      {thousandsSeparators
        ? getNumberWithCommas(parseInt(countUp as string), fixed, locale)
        : parseInt(countUp as string).toFixed(fixed)}
    </span>
  );
};

export default Counter;
