import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp/";
import SignIn from "./pages/signIn/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-up/' element={<SignUp />} />
        <Route path='/sign-in/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
