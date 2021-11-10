import Cookies from "universal-cookie";
import { setCookie } from "utils/cookie";
import { TRACKING_ELEMENTS } from "constants/tracking";
import { APP_URL } from "constants/paths";
import queryString from "query-string";
import { slugify } from "utils/string";

type Tracker = string | string[] | null;

type TrackingProps = { [name: string]: Tracker };

const isNotEmpty = (value: string | string[] | null): boolean => {
  return value !== null && value !== undefined && value !== "";
};

const setTracking = (props: TrackingProps): void => {
  Object.keys(props).forEach((tracker) => {
    if (isNotEmpty(props[tracker] as Tracker)) {
      setCookie(tracker, props[tracker] as string);
    }
  });
};

const getTracking = (): any => {
  const cookies = new Cookies(document.cookie);
  const rawTracking: TrackingProps = {};

  TRACKING_ELEMENTS.forEach((cookie) => {
    const cookieContent = cookies.get(cookie);
    if (isNotEmpty(cookieContent)) {
      rawTracking[cookie] = cookieContent;
    }
  });

  return rawTracking;
};

const getTrackedRegistrationUrl = (
  cta: string,
  page: string,
  extra?: { [name: string]: string }
): string => {
  const searchString = queryString.stringify({
    cta: slugify(cta),
    page,
    ...extra,
  });

  return `${APP_URL}/registration/register?${searchString}`;
};

export { getTracking, setTracking, getTrackedRegistrationUrl };
