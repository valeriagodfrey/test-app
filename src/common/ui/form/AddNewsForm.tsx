import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { getNewsSelector } from "../../../modules/news/selector";
import { addNews, deleteNews } from "../../../modules/news/slice";
import { Button } from "../button/Button";
import { CustomInput } from "../input/Input";

export interface NewsProps {
  news: { id: string; title: string; description: string }[];
}

export const AddNewsForm = () => {
  const dispatch = useDispatch();

  const news = useSelector(getNewsSelector);

  const { control, register, handleSubmit } = useForm<NewsProps>({
    defaultValues: { news: [{ id: "", title: "", description: "" }] },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "news" });

  const onSubmit = (data: NewsProps) => {
    data.news.map((item) => (item.id = uuidv4()));
    dispatch(addNews(data.news));
  };

  return (
    <Container>
      <HeadTitle>Новости</HeadTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <News>
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
                    Delete
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
        </News>
      </Form>
      <NewsContent>
        {news.map((item, index) => (
          <ListContainer key={index}>
            <Block>
              <Elem>Title: {item.title}</Elem>
              <Elem>Description: {item.description}</Elem>
            </Block>
            <ButtonContainer>
              <Button onClick={() => dispatch(deleteNews(item.id))}>Удалить</Button>
            </ButtonContainer>
          </ListContainer>
        ))}
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

const News = styled.div`
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
