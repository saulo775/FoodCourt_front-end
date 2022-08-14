import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/userContext";
import SignUp from "./pages/signUp/";
import SignIn from "./pages/signIn/";
import Gerency from "./pages/manager/gerency";
import InsertTable from "./pages/manager/insertTable";
import InsertCategory from "./pages/manager/insertCategory";

function App() {
  const [token, setToken] = React.useState();
  const [user, setUser] = React.useState();
  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-up/' element={<SignUp />} />
          <Route path='/sign-in/' element={<SignIn />} />
          <Route path="/manager" element={< Gerency />} />
          <Route path="/manager/insert/tables" element={< InsertTable />} />
          <Route path="/manager/insert/category" element={< InsertCategory />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
