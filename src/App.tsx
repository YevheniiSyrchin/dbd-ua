import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import News from "./components/News";
import Roulette from "./components/Roulette";
import Footer from "./components/Footer";
import "./assets/styles/styles.scss";

const App: FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="roulette" element={<Roulette />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
