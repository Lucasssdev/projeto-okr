import * as jose from "jose";

export const isValid = async (cookie) => {
  /**
   * Constante secret e a variavel utilizada para assinar o token jwt
   */
  const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT);
  
  /**
   * A constante jwt recebe o cookie pelo middleware
   */
  const jwt = cookie;



  /**
   * A constante payload armazena todos os dados referentes ao token
   * { user: 'Matheus', exp: 1671565250, iat: 1671561650, nbf: 1671561650 }
   *
   */
  const  decode = jose.decodeJwt(jwt) 
  console.log(decode.exp,'**')
   if (decode.exp < Date.now() / 1000){
    return false
  }else{

  const  {payload}  = await jose.jwtVerify(jwt, secret);
 
  console.log("payload", payload);

  
   // console.log('Token válido')
    return payload
  }
  
}
