import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Info from "./Pages/InfoPage";
import DataGrid from "./Pages/DataGridPage";
import "./css/index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dataGrid" element={<DataGrid />} />
      </Routes>
    </>
  );
};

export default App;
