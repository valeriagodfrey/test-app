import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getSeekersSelector } from "../features/selectors/Selector";
import { clearList } from "../features/user";
import { Button } from "../ui/button/Button";
import { Layout } from "../ui/layout/Layout";

export const Invoices = () => {
  const seekers = useSelector(getSeekersSelector);
  const dispatch = useDispatch();
  return (
    <Layout>
      <Content>
        {seekers.list.map((item, ind) => (
          <Seeker key={ind}>
            <Label>Фамилия: {item.surname}</Label>
            <Label>Имя: {item.name}</Label>
            <Label>Отчество: {item.patronymic}</Label>
            <Label>
              Дата рождения: {item.day} {item.month} {item.year}
            </Label>
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
`;

const Content = styled.div``;

const Label = styled.div``;
