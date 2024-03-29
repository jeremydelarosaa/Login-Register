import FormRegistrazione from "./FormRegistrazione";
import FormLogin from "./FormLogin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<FormLogin />} />
          <Route path="/" element={<FormLogin />} />
          <Route path="/Registrazione" element={<FormRegistrazione />} />
          <Route path="/index/Home" element={<Home />} />
          <Route path="/index/About" element={<About />} />
          <Route path="/index/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
