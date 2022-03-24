import React, { useState } from "react";
import styled from "styled-components";

import { DropdownArrow } from "../../../assets/icons/DropdownArrow";

interface Props {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
}

export const Accordion = ({ label, icon, content }: Props) => {
  const [clicked, setClicked] = useState(false);

  return (
    <Container>
      <Box onClick={() => setClicked((s) => !s)}>
        <TitleContainer>
          <Icon>{icon}</Icon>
          <Label>{label}</Label>
        </TitleContainer>
        <Arrow position={clicked === false ? "down" : "up"}>
          <DropdownArrow />
        </Arrow>
      </Box>
      <Content clicked={clicked}>{content}</Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
`;

const Label = styled.div`
  font-size: 14px;
  line-height: 22px;
`;

const Icon = styled.div<{ type?: "arrow" | "icon" }>`
  align-items: center;
  margin-right: 8px;
`;

const Arrow = styled.div<{ position?: "up" | "down" }>`
  margin-right: 24px;
  transform: ${({ position }) => (position === "up" ? `rotate(180deg)` : 0)};
  transition: all 0.1s ease-in-out;
`;

const Content = styled.div<{ clicked?: boolean }>`
  overflow: hidden;
  max-height: ${({ clicked }) => (clicked ? `120px` : 0)};
  transition: all 0.1s ease-in-out;
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 9px;
  }
`;
