import React, { FC, useState } from "react";
import styled from "styled-components";

import { PlusIcon } from "../../assets/icons/PlusIcon";
import { Button } from "../button/Button";
import { Drawer } from "../drawer/Drawer";

export const InvoicesHeader: FC = ({ children }) => {
  const [show, setShow] = useState(false);

  const [type, setType] = useState("seeker");
  return (
    <Container>
      <Box>
        <Submenu>{children}</Submenu>
        <div>
          <ButtonContainer>
            <Button
              onClick={() => {
                setShow((s) => !s);
                setType("seeker");
              }}
            >
              <Icon>
                <PlusIcon />
              </Icon>
              Add new seeker
            </Button>
            <Button
              style={{ marginLeft: "10px" }}
              onClick={() => {
                setShow((s) => !s);
                setType("employee");
              }}
            >
              <Icon>
                <PlusIcon />
              </Icon>
              Add new employee
            </Button>
          </ButtonContainer>
        </div>
      </Box>
      <Drawer type={type} visible={show} onClick={() => setShow((s) => !s)} />
    </Container>
  );
};

const Container = styled.div``;

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Submenu = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Icon = styled.span`
  margin-right: 4px;
`;
