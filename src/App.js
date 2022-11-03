import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage, Projects, Project, Info, Blogs, Contact } from "./Pages";
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <main className="App relative h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/:title" element={<Project />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}

export default App;
