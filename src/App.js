import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import Warta from "./Screens/Warta";
import Static from "./Screens/Static";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path="Detail/:id" element={<Detail/>}></Route>
        <Route path="Warta/" element={<Warta/>}></Route>
        <Route path="Static/:id" element={<Static/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}