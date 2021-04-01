import { useAsyncFn } from 'react-use';
import { useSession } from 'next-auth/client';

const stringifyObject = (obj) =>
  typeof obj === 'object' && obj !== null && !(obj instanceof FormData)
    ? JSON.stringify(obj)
    : obj;

const noop = () => {};

const useApi = ({ onSuccess = noop, onError = noop }) => {
  const [session] = useSession();
  return useAsyncFn(
    async (endpoint, options = {}) =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        body: stringifyObject(options.body),
        headers: {
          Accept: 'application/json',
          ...options.headers,
          ...(session?.access_token && { access_token: session.access_token }),
        },
      })
        .then((res) => res.json())
        .then((json) => {
          onSuccess(json);
          return json;
        })
        .catch((e) => {
          onError(e);
          throw new Error(e);
        }),
    [session]
  );
};

export default useApi;
