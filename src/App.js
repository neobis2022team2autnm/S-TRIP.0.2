import { useState } from 'react'
import Navbar from "./components/Navbar";
import Signin from "./components/SingIn";

function App() {

  const [active, setActive] = useState(false)

  return (
    <div className="App">
      <Navbar />
      Hello Wolrd
    </div>
  );
}

export default App;
