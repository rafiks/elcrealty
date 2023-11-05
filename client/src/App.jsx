import Home from "./Pages/Home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./Pages/About"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import Header from "./components/Header"

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  ); 
}