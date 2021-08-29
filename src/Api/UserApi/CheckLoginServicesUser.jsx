import http from "../HTTPAxios";

const checklogin = (user) => {
  return http.post("/auth/local", 
  {
    identifier: user.identifier,
    password: user.password,
  });
};

const signup = (user) => {
  return http.post("/auth/local/register", 
  {
    username: user.username,
    email: user.email,
    password: user.password,
  });
};

const CheckLoginServicesUser ={checklogin, signup};

export default CheckLoginServicesUser;
