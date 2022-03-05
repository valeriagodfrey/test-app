import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Authorization } from "./pages/authorization";
import { Registration } from "./pages/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
