import jwt from 'jsonwebtoken'

export const token = (name)=>{
    const secret = process.env.NEXT_PUBLIC_KEY_JWT;
    
    if(secret){
        const tk = jwt.sign({user: name}, secret)
        return tk;
    }
}