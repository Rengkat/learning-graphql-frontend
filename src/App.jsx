import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import DetailProject from "./pages/DetailProject";
function App() {
  return (
    <>
      <Nav />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:clientId" element={<div>About</div>} />
          <Route path="project/:projectId" element={<DetailProject />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
