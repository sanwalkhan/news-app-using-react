import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/Navbar";
import News  from "./components/news";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const [Mode, setMode] = useState('light')
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <Router>
        <NavBar Mode={Mode} setMode={setMode} />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <News setProgress={setProgress}
                key="general"
                pageSize={12}
                country="us"
                category="general"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News setProgress={setProgress}
                key="business"
                pageSize={12}
                country="us"
                category="business"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={setProgress}
                key="entertainment"
                pageSize={12}
                country="us"
                category="entertainment"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News setProgress={setProgress}
                key="general"
                pageSize={12}
                country="us"
                category="general"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress}
                key="health"
                pageSize={12}
                country="us"
                category="health"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress}
                key="science"
                pageSize={12}
                country="us"
                category="science"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress}
                key="sports"
                pageSize={12}
                country="us"
                category="sports"
                mode={Mode}
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress}
                key="technology"
                pageSize={12}
                country="us"
                category="technology"
                mode={Mode}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
