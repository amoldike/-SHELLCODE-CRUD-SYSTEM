import "./App.css";
import EditUserForm from "./Components/pages/EditUserForm";
import Home from "./Components/pages/Home";
import AddUserForm from "./Components/pages/AddUserForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-user" element={<AddUserForm />} />
          <Route path="/edit-user/:userId" element={<EditUserForm />} />
          <Route path="*" element={<h3>404:PAGE NOT FOUND</h3>} />
        </Routes>
      </BrowserRouter>

      <div></div>
    </div>
  );
}

export default App;
