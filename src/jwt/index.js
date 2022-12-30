import * as jose from 'jose';

export async function token(user) {
    const iat = Math.floor(Date.now() / 1000);
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT)
    
    const exp = iat + 60 * 60 * 2; // one day
    
    const jwt = await new jose.SignJWT({user})
                .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
                .setExpirationTime(exp)
                .setIssuedAt(iat)
                .setNotBefore(iat)
                .sign(secret)
    
    return jwt;
}
