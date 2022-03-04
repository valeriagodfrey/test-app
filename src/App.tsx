import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Registration } from "./pages/registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
