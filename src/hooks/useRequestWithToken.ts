import { useAuth0 } from "@auth0/auth0-react";
import { WithTokenFunction } from "utils/createRequest";

function useRequestWithToken<T>(request: WithTokenFunction<T>) {
  const { getIdTokenClaims } = useAuth0();
  return request(getIdTokenClaims);
}

export default useRequestWithToken;
