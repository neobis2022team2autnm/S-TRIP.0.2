// //import React and additional dependencies
// import { useEffect, useRef } from "react";

// //import components
// import { LoginByGoogle } from "../../port/index";

// export const Signin = ({ status, active, setActive }) => {
//   const googleBtn = useRef(null);

//   const handleCallbackResponse = (response) => {
//     LoginByGoogle(response.credential);
//   };

//   useEffect(() => {
//     /*global google */
//     google.accounts.id.initialize({
//       client_id:
//         "389304183889-m72ksip97kttaov9jkd86anlkkgiphgh.apps.googleusercontent.com",
//       callback: handleCallbackResponse,
//     });

//     google.accounts.id.renderButton(googleBtn.current, {
//       theme: "outline",
//       size: "large",
//     });

//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setActive(false)
//   };

//   return (
//     <form onClick={handleSubmit}>
//       <div className={"google_login"}>
//         <button ref={googleBtn} />
//       </div>
//     </form>
//   );
// };

// export default Signin;


// import logo from './logo.svg';
// import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from '@react-oauth/google';
import { LoginByGoogle } from "../../port/index";
import axios from "axios"

function App() {

  const login = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })

        console.log(res.data)
        // // Извлекаем данные пользователя из ответа
        // const { name, email, picture } = res;

        // // Сохраняем данные в localStorage
        // localStorage.setItem('userName', name);
        // localStorage.setItem('userEmail', email);
        // localStorage.setItem('userPicture', picture);
      } catch (err) {
        console.log(err)
      }
    }
  });

  const onSuccess = (credentialResponse) => {
    LoginByGoogle(credentialResponse.credential)
  }

  return (
    <div className="App">
      <header className="App-header flex justify-center ">
        <GoogleLogin
          onClick={login}
          onSuccess={onSuccess}
          onError={() => {
            console.log('Login Failed');
          }} />
      </header>
    </div>
  );
}

export default App;