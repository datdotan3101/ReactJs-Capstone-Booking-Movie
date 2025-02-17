import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import { renderRoute } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>{renderRoute()}</Routes>
    </BrowserRouter>
  );
}

export default App;
