import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../views/home/home";
import Mission from "../views/mission/misson";

const Routing = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission/:launchID" element={<Mission />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    );
  };
  
  export default Routing;