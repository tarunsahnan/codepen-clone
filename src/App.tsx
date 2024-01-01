import { useState } from "react";

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./containers";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red w-screen h-screen flex justify-start items-start overflow-hidden">
        <Routes>
          <Route path="/home/*" element={<Home />} />
          <Route path="*" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
