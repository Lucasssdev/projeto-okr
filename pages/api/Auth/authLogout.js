
import { evokingToken } from "../../../src/jwt/evokingToken";

export default async function handler(request) {
  console.log(request.cookies, "REQ");
  const newToken = await evokingToken(request.cookies)
  console.log(newToken)
  return newToken
 
  
}
