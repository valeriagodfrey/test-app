import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }

  .Toastify__toast--error {
    background-color: #fff1f0;
    border: 1px solid #ffa39e;
    border-radius: 2px;
  }

  .Toastify__toast--success {
    background-color: #f6ffed;
    border: 1px solid #b7eb8f;
    border-radius: 2px;
  }

  .Toastify__toast {
    min-height: 24px;
    display: flex;
    box-shadow: none;
    color: #595959;
    font-size: 14px;
    line-height: 22px;
  }

  .Toastify__toast-body {
    padding: 9px 16px;
    margin: 0;
    display: block;
  }

  .Toastify__progress-bar {
    background: var(--toastify-color-null);
  }

  .Toastify__zoom-enter {
    animation-name: null;
  }

  .Toastify_close-button {
    background: #595959;
    width: 16px;
    align-self: center !important;
  }
`;
