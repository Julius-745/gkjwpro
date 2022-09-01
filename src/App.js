import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="Detail/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}