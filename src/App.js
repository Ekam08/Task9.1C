import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Log from "./Log"; // this is your dashboard/home after login

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Default route → redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/log" element={<Log />} />  {/* lowercase path */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
