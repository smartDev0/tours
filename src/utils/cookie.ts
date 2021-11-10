import Cookies from "universal-cookie";
import { getDomain } from "utils/domain";

const setCookie = (key: string, value: string): void => {
  const cookies = new Cookies(document.cookie);
  let expirationDate = new Date();
  expirationDate.setFullYear(expirationDate.getFullYear() + 1);

  cookies.set(key, value, {
    path: "/",
    domain: getDomain(),
    expires: expirationDate,
    sameSite: "lax",
  });
};

const getCookie = (key: string): string => {
  const cookies = new Cookies(document.cookie);

  return cookies.get(key);
};

export { getCookie, setCookie };
