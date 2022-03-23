import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { EmployeeForm } from "../form/EmployeeForm";
import { SeekerForm } from "../form/SeekerForm";

export interface AddSeekerProps {
  id: string;
  email: string;
  surname: string;
  name: string;
  patronymic: string;
  day: number;
  month: string;
  year: number;
  number: number;
  gender: string;
  position: string;
}
interface Props {
  visible?: boolean;
  onClick?: () => void;
  type?: string;
}

export const Drawer = ({ visible, onClick, type }: Props) => {
  return (
    <Container>
      <CSSTransition in={visible} timeout={300} classNames="drawer-menu" unmountOnExit>
        <Menu visible={visible}>
          {type === "seeker" ? (
            <SeekerForm onClick={onClick} />
          ) : (
            <EmployeeForm onClick={onClick} />
          )}
        </Menu>
      </CSSTransition>

      <CSSTransition in={visible} timeout={300} classNames="drawer-area" unmountOnExit>
        <Area onClick={onClick} />
      </CSSTransition>
    </Container>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  max-height: 807px;

  .drawer-menu-enter {
    transform: translateX(100%);
  }

  .drawer-menu-active {
    transform: translateX(0);
    transition: transform 300ms;
  }

  .drawer-menu-exit {
    transform: translateX(0);
  }

  .drawer-menu-exit-active {
    transform: translateX(100%);
    transition: transform 300ms;
  }

  .drawer-area-enter {
    opacity: 0;
  }

  .drawer-area-active {
    opacity: 0.6;
    transition: opacity 300ms;
  }

  .drawer-area-exit {
    opacity: 0.6;
  }

  .drawer-area-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .drawer-area-enter-done {
    opacity: 0.6;
  }
`;

const Menu = styled.div<{ visible?: boolean }>`
  background-color: white;
  transition: all 0.5s ease-in-out;
  max-width: 444px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div`
  background: grey;
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
