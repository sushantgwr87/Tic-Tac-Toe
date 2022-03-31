import useSessionStorage from "./customHook/useSessionStorage";
import Board from "./components/Board";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mark, setMark] = useSessionStorage("mark", "cross");
  const [mode, setMode] = useSessionStorage("mode", null);

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