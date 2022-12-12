import instance from "./interceptor";


const getPublicContent = () => {
    return instance.post("/test/all");
  };
  
 
  const UserService = {
    getPublicContent,
 
  };
  
  export default UserService;