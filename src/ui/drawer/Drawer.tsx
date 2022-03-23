import styled from "styled-components";

import { EmployeeForm } from "../form/EmployeeForm";
import { SeekerForm } from "../form/SeekerForm";

interface Props {
  visible?: boolean;
  onClick?: () => void;
  type?: string;
}

export const Drawer = ({ visible, onClick, type }: Props) => {
  return (
    <Container>
      <Menu visible={visible}>
        {type === "seeker" ? <SeekerForm onClick={onClick} /> : <EmployeeForm onClick={onClick} />}
      </Menu>

      <Area onClick={onClick} visible={visible} />
    </Container>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  max-height: 807px;
`;

const Menu = styled.div<{ visible?: boolean }>`
  background-color: white;
  max-width: 444px;
  flex-direction: column;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  transform: ${({ visible }) => (visible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 300ms ease-in-out;
`;

const Area = styled.div<{ visible?: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background: grey;
  opacity: ${({ visible }) => (visible ? "0.6" : "none")};
  transition: opacity 300ms ease-in-out;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
