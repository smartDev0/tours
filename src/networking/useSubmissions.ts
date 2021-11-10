import client from "networking/client";

export const useAddSubmission = (): ((
  email: string,
  extra?: any
) => Promise<void>) => {
  return async (email: string, extra?: any) => {
    return await client.post({
      url: "/public/submissions/",
      body: JSON.stringify({
        email: email,
        extra: extra,
      }),
    });
  };
};
