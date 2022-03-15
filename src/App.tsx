import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { store } from "./core/redux/store";
import { Authorization } from "./pages/authorization";
import { HomePage } from "./pages/homePage";
import { Registration } from "./pages/registration";
import { StyledToastContainer } from "./ui/notificatoin/Notification";

function App() {
  return (
    <Provider store={store}>
      {/* <StyledToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
