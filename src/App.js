import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Log"; 

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} /> {/* <-- new route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
