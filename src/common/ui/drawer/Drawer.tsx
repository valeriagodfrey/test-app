import styled from "styled-components";

import { ChangePasswordForm } from "../form/ChangePasswordForm";
import { EmployeeForm } from "../form/EmployeeForm";
import { SeekerForm } from "../form/SeekerForm";

interface Props {
  visible?: boolean;
  onClick?: () => void;
  type?: string;
}

export const Drawer = ({ visible, onClick, type }: Props) => {
  return (
    <>
      <Area onClick={onClick} visible={visible} />
      <Container visible={visible}>
        <Menu>
          {type === "seeker" ? (
            <SeekerForm visible={visible} onClick={onClick} />
          ) : type === "employee" ? (
            <EmployeeForm visible={visible} onClick={onClick} />
          ) : (
            <ChangePasswordForm visible={visible} onClick={onClick} />
          )}
        </Menu>
      </Container>
    </>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  right: ${({ visible }) => (visible ? "0" : "-50vw")};
  top: 0;
  bottom: 0;
  z-index: 1001;
  transition: 0.5s ease;
  width: 444px;
`;

const Menu = styled.div`
  background-color: white;
  max-width: 444px;
  flex-direction: column;
  height: 100vh;
`;

const Area = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: rgba(89, 88, 88, 0.6);
  transition: background-color 1700ms ease-in-out;
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
