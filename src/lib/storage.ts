export const getAuth = () => {
  return localStorage.getItem("isAuth");
};

export const setAuth = () => {
  return localStorage.setItem("isAuth", "true");
};
