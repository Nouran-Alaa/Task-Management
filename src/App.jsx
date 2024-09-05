import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Login from "./features/user/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
