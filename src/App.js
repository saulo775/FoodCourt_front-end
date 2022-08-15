import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/userContext";
import SignUp from "./pages/signUp/";
import SignIn from "./pages/signIn/";
import Gerency from "./pages/manager/gerency";
import InsertTable from "./pages/manager/insertTable";
import InsertCategory from "./pages/manager/insertCategory";
import InsertProduct from "./pages/manager/insertProduct";
import Hall from "./pages/waiter/hall";
import Menu from "./pages/waiter/menu";

function App() {
  const [token, setToken] = React.useState();
  const [user, setUser] = React.useState();
  const [table, setTable] = React.useState();

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser, table, setTable }}>
      <BrowserRouter>
        <Routes>
          <Route path='/sign-up/' element={<SignUp />} />
          <Route path='/sign-in/' element={<SignIn />} />
          <Route path='/' element={<SignIn />} />
          {/* Manager Routes */}
          <Route path="/manager" element={< Gerency />} />
          <Route path="/manager/insert/tables" element={< InsertTable />} />
          <Route path="/manager/insert/category" element={< InsertCategory />} />
          <Route path="/manager/insert/product" element={< InsertProduct />} />

          {/* Waiter Routes */}

          <Route path="/waiter" element={< Hall />} />
          <Route path="/waiter/menu" element={<Menu />} />


        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
