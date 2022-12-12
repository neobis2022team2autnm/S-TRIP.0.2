const getLocalRefreshToken = () => {
    const user = JSON.parse(localStorage.getItem("tokens"));
    return user?.refresh;
  };
  
  const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("tokens"));
    return user?.access;
  };
  
  const updateLocalAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("tokens"));
    user.access = token;
    localStorage.setItem("tokens", JSON.stringify(user));
  };
  
  const getUser = () => {
    return JSON.parse(localStorage.getItem("tokens"));
  };
  
  const setUser = (user) => {
    console.log("get user",user);
    localStorage.setItem("tokens", JSON.stringify(user));
  };
  
  const removeUser = () => {
    localStorage.removeItem("tokens");
  };
  
  const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    removeUser,
  };
  
  export default TokenService;