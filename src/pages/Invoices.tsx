import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "../common/ui/button/Button";
import { Layout } from "../common/ui/layout/Layout";
import { getAllListSelector, getEmployeeSelector } from "../modules/employee/selectors";
import { addList, deleteEmployee, deleteOnePosition } from "../modules/employee/slice";
import { getCurrentTabSelector, getSeekersSelector } from "../modules/seekers/selectors";
import { deleteSeeker } from "../modules/seekers/slice";

export const Invoices = () => {
  const dispatch = useDispatch();

  const seekers = useSelector(getSeekersSelector);
  const employee = useSelector(getEmployeeSelector);
  const currentTab = useSelector(getCurrentTabSelector);

  const allApplications = seekers.list.concat(employee.list);
  const allList = useSelector(getAllListSelector);

  useEffect(() => {
    dispatch(addList(allApplications));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seekers, employee, dispatch]);

  return (
    <Layout>
      <Content>
        {currentTab.currentTab === "all"
          ? allList.list.map((item) => (
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
                  <Button
                    styleType="secondary"
                    onClick={() => {
                      dispatch(deleteOnePosition(item.id));
                      dispatch(item.position ? deleteEmployee(item.id) : deleteSeeker(item.id));
                    }}
                  >
                    Удалить
                  </Button>
                </ButtonContainer>
              </Seeker>
            ))
          : currentTab.currentTab === "seekers"
          ? seekers.list.map((item) => (
              <Seeker key={item.id}>
                <SeekerContainer>
                  <Label>Фамилия: {item.surname}</Label>
                  <Label>Имя: {item.name}</Label>
                  <Label>Отчество: {item.patronymic}</Label>
                  <Label>
                    Дата рождения: {item.day} {item.month} {item.year}
                  </Label>

                  <Label>ID: {item.id}</Label>
                </SeekerContainer>
                <ButtonContainer>
                  <Button styleType="secondary" onClick={() => dispatch(deleteSeeker(item.id))}>
                    Удалить
                  </Button>
                </ButtonContainer>
              </Seeker>
            ))
          : currentTab.currentTab === "employee"
          ? employee.list.map((item) => (
              <Seeker key={item.id}>
                <SeekerContainer>
                  <Label>Фамилия: {item.surname}</Label>
                  <Label>Имя: {item.name}</Label>
                  <Label>Отчество: {item.patronymic}</Label>
                  <Label>
                    Дата рождения: {item.day} {item.month} {item.year}
                  </Label>
                  <Label>Должность: {item.position}</Label>
                  <Label>ID: {item.id}</Label>
                </SeekerContainer>
                <ButtonContainer>
                  <Button styleType="secondary" onClick={() => dispatch(deleteEmployee(item.id))}>
                    Удалить
                  </Button>
                </ButtonContainer>
              </Seeker>
            ))
          : ""}
      </Content>
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
