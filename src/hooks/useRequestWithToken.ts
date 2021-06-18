import { GetIdTokenClaimsOptions, IdToken, useAuth0 } from "@auth0/auth0-react";

function useRequestWithToken<T>(
  request: (
    getAccessToken: (
      options?: GetIdTokenClaimsOptions | undefined
    ) => Promise<IdToken>
  ) => T
) {
  const { getIdTokenClaims } = useAuth0();
  return request(getIdTokenClaims);
}

export default useRequestWithToken;
