import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getCurrentUserSelector, getUsersSelector } from "../modules/authorisation/selectors";
import { Button } from "../common/ui/button/Button";
import { Drawer } from "../ui/drawer/Drawer";
import { Layout } from "../ui/layout/Layout";

export const Cabinet = () => {
  const [show, setShow] = useState(false);

  const authUser = useSelector(getCurrentUserSelector);
  const users = useSelector(getUsersSelector);

  const currentUser = users.list.filter(
    (item) => item.email === authUser.email && item.password === authUser.password,
  );
  return (
    <Layout>
      <Container>
        {currentUser.map((item) => (
          <UserContainer>
            Current User
            <User>
              <Label>Фамилия: {item.surname}</Label>
              <Label>Имя: {item.name}</Label>
              <Label>Отчество: {item.patronymic}</Label>
              <Label>Email: {item.email}</Label>
              <Label>Id: {item.id}</Label>
              <Label>
                Date of birth: {item.day} {item.month},{item.year}
              </Label>
            </User>
            <div>
              <Button>Сменить пароль</Button>
            </div>
          </UserContainer>
        ))}
        <Drawer type="changePassword" visible={show} onClick={() => setShow((s) => !s)} />
      </Container>
    </Layout>
  );
};

const Container = styled.div``;

const Label = styled.div`
  font-weight: normal;
`;

const User = styled.div`
  margin: 15px 0px 25px;
`;

const UserContainer = styled.div`
  font-weight: bold;
  line-height: 20px;
`;
