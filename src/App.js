import { Route, Routes } from "react-router-dom";
import Homepage from "./route/Homepage";
import AboutPage from "./route/AboutPage";
import NavBar from "./NavBar";
import Contact from "./Contact";
import NavFooter from "./NavFooter";
import Login from "./Login";
import Signup from "./Signup";
import MyProfile from "./MyProfile";
import { StaffProvider } from "./StaffContext";
function App() {
  return (
    <StaffProvider>
      <Routes>
        <Route path="/" element={<NavFooter />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/MyProfile" element={<MyProfile />} />
        </Route>
      </Routes>
    </StaffProvider>
  );
}

export default App;
