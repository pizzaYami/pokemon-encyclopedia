import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
