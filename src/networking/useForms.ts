import client from "networking/client";

export const useSendForm = (): ((
  email: string,
  attributes?: { [name: string]: string }
) => Promise<void>) => {
  return async (email: string, attributes?: any) => {
    return await client.put({
      url: "/public/forms/",
      body: JSON.stringify({
        email,
        attributes,
      }),
    });
  };
};
