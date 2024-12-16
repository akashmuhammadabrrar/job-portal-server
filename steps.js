/**
 * 1st:after successful generate a jwt token
 * npm i jsonwebtoken, cookie-parser
 * jwt.sign(payload, secret,{expiresIn: "1h"})
 *
 * 2nd: send token(generated in the server side) to the client side
 * ----*---- localstorage/session storage ---> easier
 * ----*---- httpOnly cookies ---> better
 *
 * 3rd: for sensitive or secure or privet apis: send token to the server side
 * 
 * ---On the server side---
 *const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
 *
 ----On the client side----

use axios get,post,delete, patch for secure apis and must use:{ withCredentials: true,}

 * 4rth: validate the token in the server side:
 * if valid: provide data
 * if not valid: logout user
 * 
 * 5: check right user accessing his/her own data based on permission
 * 
 * **/
