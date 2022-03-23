import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getEmployeeSelector } from "../modules/employee/selectors";
import { getSeekersSelector } from "../modules/seekers/selectors";
import { clearList, deleteSeeker } from "../modules/seekers/slice";
import { Button } from "../ui/button/Button";
import { tabsList } from "../ui/header/data";
import { InvoicesHeader } from "../ui/header/InvoicesHeader";
import { Layout } from "../ui/layout/Layout";

export const Invoices = () => {
  const dispatch = useDispatch();

  const seekers = useSelector(getSeekersSelector);
  const employee = useSelector(getEmployeeSelector);

  const allApplications = employee.list.concat(seekers.list);

  return (
    <Layout>
      <Content>
        {allApplications.map((item) => (
          <Seeker key={item.id}>
            <SeekerContainer>
              <Label>Фамилия: {item.surname}</Label>
              <Label>Имя: {item.name}</Label>
              <Label>Отчество: {item.patronymic}</Label>
              <Label>
                Дата рождения: {item.day} {item.month} {item.year}
              </Label>
              {item.position ? <Label>Должность: {item.position}</Label> : null}
              <Label>ID: {item.id}</Label>
            </SeekerContainer>
            <ButtonContainer>
              <Button styleType="secondary" onClick={() => dispatch(deleteSeeker(item.id))}>
                Удалить
              </Button>
            </ButtonContainer>
          </Seeker>
        ))}
      </Content>
      <Button onClick={() => dispatch(clearList())}>Clear</Button>
    </Layout>
  );
};
const Seeker = styled.div`
  border: 1px solid #d9d9d9;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Content = styled.div``;

const Label = styled.div``;

const SeekerContainer = styled.div``;

const ButtonContainer = styled.div``;
