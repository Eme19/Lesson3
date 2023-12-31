import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Homepage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
 
function App() {
  return (
    <div className="App">
      <NavBar />
 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}
 
export default App;