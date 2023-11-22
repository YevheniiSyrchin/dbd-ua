import React, { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Flag from "./components/Flag";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Home from "./components/Home";
import Roulette from "./components/Roulette";
import UserAccount from "./components/UserAccount";
import Footer from "./components/Footer";
import PageMetadata from "./components/PageMetadata";
import "./assets/styles/styles.scss";

const App: FC = () => {
  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Flag />
          <Navigation />
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <PageMetadata title="Головна" />
                    <Home />
                  </>
                }
              />
              <Route
                path="roulette"
                element={
                  <>
                    <PageMetadata title="Рулетка" />
                    <Roulette />
                  </>
                }
              />
              <Route
                path="account"
                element={
                  <>
                    <PageMetadata title="Профіль" />
                    <UserAccount />
                  </>
                }
              />
            </Routes>
          </div>
          <Aside />
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
