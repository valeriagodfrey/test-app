import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { getNewsSelector } from "../../../modules/news/selector";
import { addNews, deleteAll, deleteNews } from "../../../modules/news/slice";
import { Button } from "../button/Button";
import { CustomInput } from "../input/Input";

interface News {
  id: string;
  title: string;
  description: string;
}
export interface NewsProps {
  news: News[];
}

export const AddNewsForm = () => {
  const dispatch = useDispatch();

  const newsList = useSelector(getNewsSelector);

  const { control, register, handleSubmit } = useForm<NewsProps>({
    defaultValues: { news: [{ id: "", title: "", description: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "news" });

  const onSubmit = (data: NewsProps) => {
    data.news.map((item) => (item.id = uuidv4()));
    dispatch(addNews(data.news));
  };

  // eslint-disable-next-line no-console
  console.log(newsList);

  return (
    <Container>
      <HeadTitle>Новости</HeadTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NewsBlock>
          {fields.map((item, index) => {
            return (
              <NewsContainer key={item.id}>
                <Title>
                  <CustomInput
                    {...register(`news.${index}.title` as "news.0.title", { required: true })}
                    withLabel
                    label="Title"
                    name={`news.${index}.title`}
                  />
                </Title>

                <Description>
                  <CustomInput
                    {...register(`news.${index}.description` as "news.0.description", {
                      required: true,
                    })}
                    withLabel
                    label="Description"
                    name={`news.${index}.description`}
                  />
                </Description>
                <ButtonContainer styleType="secondary">
                  <Button styleType="secondary" type="button" onClick={() => remove(index)}>
                    Удалить
                  </Button>
                </ButtonContainer>
              </NewsContainer>
            );
          })}
          <ButtonContainer>
            <Button type="submit">Сохранить</Button>
            <Button
              onClick={() => {
                append({ title: "", description: "" });
              }}
            >
              Добавить
            </Button>
          </ButtonContainer>
        </NewsBlock>
      </Form>
      <NewsContent>
        {newsList.news.map((item, index) => (
          <ListContainer key={index}>
            <Block>
              <Elem>Заголовок: {item.title}</Elem>
              <Elem>Описание: {item.description}</Elem>
            </Block>
            <ButtonContainer>
              <Button styleType="secondary" onClick={() => dispatch(deleteNews(item.id))}>
                Удалить
              </Button>
            </ButtonContainer>
          </ListContainer>
        ))}
        <ButtonContainer>
          <Button onClick={() => dispatch(deleteAll())}>Очистить</Button>
        </ButtonContainer>
      </NewsContent>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const HeadTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 24px;
`;

const Title = styled.div``;

const NewsBlock = styled.div`
  width: 100%;
  justify-content: space-between;
`;

const ButtonContainer = styled.div<{ styleType?: string }>`
  height: 40px;
  display: flex;
  max-width: 220px;
  justify-content: space-between;
  margin-top: ${({ styleType }) => (styleType === "secondary" ? "6px" : "0px")};
`;

const Description = styled.div`
  margin-left: 24px;
  width: 500px;
  margin-right: 20px;
`;

const NewsContainer = styled.div`
  display: flex;

  font-weight: 400;
  font-size: 16px;
  align-items: center;
`;

const NewsContent = styled.div`
  margin-top: 24px;
`;

const ListContainer = styled.div`
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  border: 1px solid lightblue;
  margin-bottom: 24px;
`;

const Elem = styled.div``;

const Block = styled.div``;
