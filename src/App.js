import "./App.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

// https://res.cloudinary.com/doo5jbomi/image/upload/v1663487872/PomodoroApp/dev_gdker9.svg
