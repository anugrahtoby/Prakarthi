import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About";
import Home from "./pages/Home.jsx";
import GetInvolved from "./pages/GetInvolved";
import Stories from "./pages/Stories.jsx";
import Organizations from "./pages/Organizations.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="organizations" element={<Organizations />} />
          <Route path="stories" element={<Stories />} />
        </Route>
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
