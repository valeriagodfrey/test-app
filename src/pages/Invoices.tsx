import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Button } from "../common/ui/button/Button";
import { getEmployeeSelector } from "../modules/employee/selectors";
import { getCurrentTabSelector, getSeekersSelector } from "../modules/seekers/selectors";
import { deleteSeeker } from "../modules/seekers/slice";
import { Layout } from "../ui/layout/Layout";

export const Invoices = () => {
  const dispatch = useDispatch();

  const seekers = useSelector(getSeekersSelector);
  const employee = useSelector(getEmployeeSelector);
  const currentTab = useSelector(getCurrentTabSelector);

  const allApplications = employee.list.concat(seekers.list);
  const deleteFromAll = (id: string) => {
    return allApplications.filter((item) => item.id !== id);
  };

  return (
    <Layout>
      <Content>
        {currentTab.currentTab === "all"
          ? allApplications.map((item) => (
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
                  <Button styleType="secondary" onClick={() => deleteFromAll(item.id)}>
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
                  <Button styleType="secondary" onClick={() => dispatch(deleteSeeker(item.id))}>
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
