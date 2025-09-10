import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./Pages/LandingPage";
import Info from "./Pages/InfoPage";
import DataGrid from "./Pages/DataGridPage";
import "./css/index.css";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/info" element={<Info />} />
        <Route path="/dataGrid" element={<DataGrid />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
