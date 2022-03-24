import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "../common/ui/button/Button";
import { Layout } from "../common/ui/layout/Layout";
import { getUsersSelector } from "../modules/authorisation/selectors";
import { deleteUser } from "../modules/authorisation/slice";

export const Users = () => {
  const users = useSelector(getUsersSelector);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Content>
        {users.list.map((item) => (
          <User key={item.id}>
            <UserContainer>
              <Label>Фамилия: {item.surname}</Label>
              <Label>Имя: {item.name}</Label>
              <Label>Отчество: {item.patronymic}</Label>
              <Label>
                Дата рождения: {item.day} {item.month} {item.year}
              </Label>
              <Label>Email: {item.email}</Label>
              <Label>ID: {item.id}</Label>
            </UserContainer>
            <ButtonContainer>
              <Button styleType="secondary" onClick={() => dispatch(deleteUser(item.id))}>
                Удалить
              </Button>
            </ButtonContainer>
          </User>
        ))}
      </Content>
    </Layout>
  );
};

const Content = styled.div``;

const Label = styled.div``;

const User = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 10px;
  margin-bottom: 10px;
`;

const UserContainer = styled.div``;

const ButtonContainer = styled.div``;
