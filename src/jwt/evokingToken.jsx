import * as jose from "jose";

export const evokingToken = async (cookie) => {
  //const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT);
  const jwt = cookie;
  console.log(jwt);
  const decode = jose.decodeJwt(jwt);
  console.log(decode.exp, "**");
  decode.exp = Date.now() / 1000 - 30;

  const newToken = await new jose.SignJWT(decode);
  console.log(newToken, "NEWW");
  return newToken;
};
