import React from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { media } from "../../assets/media";

interface Props {
  visible?: boolean;
  onClick?: () => void;
}

export const Drawer = ({ visible, onClick }: Props) => {
  return (
    <Container>
      <CSSTransition in={visible} timeout={300} classNames="drawer-menu" unmountOnExit>
        <Menu visible={visible}></Menu>
      </CSSTransition>

      <CSSTransition in={visible} timeout={300} classNames="drawer-area" unmountOnExit>
        <Area onClick={onClick} />
      </CSSTransition>
    </Container>
  );
};
const Container = styled.div<{ visible?: boolean }>`
  position: fixed;
  z-index: 10;
  height: 100vh;

  .drawer-menu-enter {
    transform: translateX(-100%);
  }
  .drawer-menu-active {
    transform: translateX(0);
    transition: transform 300ms;
  }
  .drawer-menu-exit {
    transform: translateX(0);
  }
  .drawer-menu-exit-active {
    transform: translateX(-100%);
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

  ${media.desktop} {
    display: none;
  }
`;

const Menu = styled.div<{ visible?: boolean }>`
  padding-top: 62px;
  background-color: white;
  transition: all 0.5s ease-in-out;
  min-height: calc(100vh - 62px);
  display: flex;
  flex-direction: column;
`;

const Area = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  z-index: -1;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
