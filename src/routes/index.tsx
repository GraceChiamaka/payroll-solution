import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import Staff from "../pages/Staff";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff/:id" element={<Staff />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
