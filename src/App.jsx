import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Nav />
      <div className="px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:clientId" element={<div>About</div>} />
          <Route path="/:projectId" element={<div>About</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
