import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-red w-100 h-100 flex justify-center items-center">
        Hello
      </div>
    </>
  );
}

export default App;
