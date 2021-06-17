import { useAuth0 } from "@auth0/auth0-react";

function useRequestWithToken<T>(
  request: (getAccessToken: () => Promise<string>) => T
) {
  const { getAccessTokenSilently } = useAuth0();
  return request(getAccessTokenSilently);
}

export default useRequestWithToken;
