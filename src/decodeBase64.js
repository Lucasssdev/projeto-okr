import { Base64 } from "js-base64";

export function Encode(obj){
  try {
    const string = JSON.stringify(obj);
    return Base64.encode(string);
   
  } catch (e) {
    console.log(e);
  }
}

export function Decode(base64){
  try {
    const decode = Base64.decode(base64);
    return JSON.parse(decode);
  } catch (e) {
    console.log(e);
  }
}


