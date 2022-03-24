import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./core/redux/store";
import { Authorization } from "./pages/Authorization";
import { Cabinet } from "./pages/Cabinet";
import { Dashboard } from "./pages/Dashboard";
import { Drafts } from "./pages/Drafts";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Help } from "./pages/Help";
import { HomePage } from "./pages/Home";
import { Invoices } from "./pages/Invoices";
import { PasswordRecovery } from "./pages/PasswordRecovery";
import { Registration } from "./pages/Registration";
import { Reports } from "./pages/Reports";
import { Settings } from "./pages/Settings";
import { Templates } from "./pages/Templates";
import { Users } from "./pages/Users";
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
            <Route path="/registration" element={<Registration />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/help" element={<Help />} />
            <Route path="/documents/invoices" element={<Invoices />} />
            <Route path="/documents/drafts" element={<Drafts />} />
            <Route path="/documents/templates" element={<Templates />} />
            <Route path="/customers/users" element={<Users />} />
            <Route path="/customers/cabinet" element={<Cabinet />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/password_recovery" element={<PasswordRecovery />} />
            <Route path="*" element={<Navigate to="/authorization" />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
