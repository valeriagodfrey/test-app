import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./core/redux/store";
import { Authorization } from "./pages/authorization";
import { Dashboard } from "./pages/dashboard";
import { Drafts } from "./pages/drafts";
import { ForgotPassword } from "./pages/forgotPassword";
import { Help } from "./pages/help";
import { HomePage } from "./pages/home";
import { Invoices } from "./pages/invoices";
import { PasswordRecovery } from "./pages/passwordRecovery";
import { Registration } from "./pages/registration";
import { Reports } from "./pages/reports";
import { Settings } from "./pages/settings";
import { Templates } from "./pages/templates";
import { StyledToastContainer } from "./ui/notification/Notification";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StyledToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={true}
          draggable
          pauseOnHover
          icon={false}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/documents/invoices" element={<Invoices />} />
            <Route path="/documents/drafts" element={<Drafts />} />
            <Route path="/documents/templates" element={<Templates />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/password_recovery" element={<PasswordRecovery />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
