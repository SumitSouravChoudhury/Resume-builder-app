import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Header />} />
        <Route exact path="/body" element={<Body />} />
      </Routes>
      {/* <Body /> */}
    </div>
  );
}

export default App;
