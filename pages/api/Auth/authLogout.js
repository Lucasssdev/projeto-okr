import { deleteCookie } from "cookies-next";
export function getSeverSideProps(context) {
  console.log(context)
 
}


export default async function handler(request) {
  console.log(request.cookies, "REQ");
  deleteCookie('userLogged')
  return request.redirect(new URL('/login', request.url))  
  
}
