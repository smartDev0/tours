import client from "networking/client";

export const useRegister = (): ((
  eventId: string,
  email: string,
  firstName: string,
  lastName: string,
  extra?: { [name: string]: string }
) => Promise<void>) => {
  return async (
    eventId: string,
    email: string,
    firstName: string,
    lastName: string,
    extra?: any
  ) => {
    return await client.post({
      url: `/public/webinars/${eventId}/register`,
      body: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
        extra: extra,
      }),
    });
  };
};
