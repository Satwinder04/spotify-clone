import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Front from "./components/Front";
import Home from "./components/Home";
import { useContext, useEffect } from "react";
import { StateContext } from "./context/context";
import SearchPage from "./pages/SearchPage";

function App() {
  const { token, getToken } = useContext(StateContext);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      getToken(token);
    }
  }, [token]);
  return (
    <BrowserRouter>
      {token ? <Home /> : <Front />}
      <Routes>
        {/* <Route path="/" element={<Front />}></Route> */}
        {/* <Route path="/front" element={<Front />}></Route> */}
        {/* <Route path="/search" element={<SearchPage />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
