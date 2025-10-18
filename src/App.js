import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Log from "./Log"; // dashboard/home after login

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Default route → redirect to Log instead of Login */}
        <Route path="/" element={<Navigate to="/log" replace />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard / main app page */}
        <Route path="/log" element={<Log />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
