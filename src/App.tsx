import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./core/redux/store";
import { Authorization } from "./pages/authorization";
import { HomePage } from "./pages/homePage";
import { Registration } from "./pages/registration";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
