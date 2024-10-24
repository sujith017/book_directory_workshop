import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Books from "./books";
import Header from "./header";
import ScrollToTop from "./scrolltotop";
import Login from "./components/Login"; // Ensure this path is correct
import SignIn from "./components/Signup"; // Ensure this path is correct
import "./sass/style.css";

const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to login */}
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
