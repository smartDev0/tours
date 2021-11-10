import { API_BACKEND_URL } from "constants/paths";

const call = (method: string) => {
  return async ({ body, url }: { body?: any; url: string }): Promise<any> => {
    const request = {
      body,
      headers: {
        "Content-Type": "application/json",
      },
      method,
    };

    const completeUrl = `${API_BACKEND_URL}${url}`;

    let json;
    let ok = false;
    try {
      const response = await fetch(completeUrl, request);

      ok = response.ok;
      const text = await response.text();

      if (text.length) {
        json = JSON.parse(text);
      }
    } catch (error) {
      throw Error(`Failed to fetch from ${completeUrl} with method ${method}`);
    }

    if (!ok) {
      const userMessage = json.error.message;

      throw Error(userMessage);
    }

    return json;
  };
};

export default {
  delete: call("DELETE"),
  get: call("GET"),
  post: call("POST"),
  put: call("PUT"),
};
