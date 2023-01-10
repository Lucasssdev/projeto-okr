import * as jose from "jose";

export const isValid = async (cookie) => {
  const jwt = cookie;
  const decode = jose.decodeJwt(jwt);
  if (decode.exp < Date.now() / 1000) {
    return false;
  } else {
    return true;
  }
};
