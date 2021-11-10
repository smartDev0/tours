import React, { useEffect } from "react";
import * as queryString from "query-string";
import { setTracking } from "utils/tracking";

const TrackVisitor = () => {
  useEffect(() => {
    const {
      ref,
      utm_campaign,
      utm_medium,
      utm_source,
      utm_term,
      utm_content,
      code,
    } = queryString.parse(window.location.search);

    setTracking({
      ref,
      utm_campaign,
      utm_medium,
      utm_source,
      utm_term,
      utm_content,
      code,
    });
  }, []);

  return <></>;
};

export default TrackVisitor;
