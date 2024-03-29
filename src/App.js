import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./component/NavBar";
import Login from "./page/Login";
import { useState } from "react";
import PrivateRoute from "./router/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  console.log(authenticate);

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/card/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
