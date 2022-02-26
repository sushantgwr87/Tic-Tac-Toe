import { useState } from "react";
import Board from "./components/Board";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mark, setMark] = useState("cross");
  const [mode, setMode] = useState(null);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Intro setMarkType={setMark} setModeType={setMode} />} />
          <Route path="/board" element={<Board mark={mark} mode={mode} />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;