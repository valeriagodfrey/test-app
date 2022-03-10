import { ToastContainer } from "react-toastify";
import styled from "styled-components";

export const StyledToastContainer = styled(ToastContainer)`
  .Toastify__toast-container {
    width: auto !important;
  }
  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
  .Toastify__toast--success {
    color: ${({ theme }) => theme.colors.red};
  }
  .Toastify__toast-theme--light {
    color: ${({ theme }) => theme.colors.red};
  }
  .Toastify__toast {
    min-height: 24px;
    display: flex;
  }
  svg {
    width: 100%;
    height: 100%;
    display: none;
  }
  .Toastify__toast-body {
    padding: 3px 16px;
    margin: 0;
    display: block;
  }
  .Toastify_toast-icon {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .Toastify__progress-bar {
    background: var(--toastify-color-null);
  }
  .Toastify__zoom-enter {
    animation-name: null;
  }
`;
