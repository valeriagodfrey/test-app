export interface IOption {
  value: string | number;
  label: string;
}

export const years: IOption[] = [];
for (let i = 2022; i > 1900; i = i - 1) {
  years.push({ value: i, label: `${i}` });
}

export const months: IOption[] = [
  { value: "Январь", label: "Январь" },
  { value: "Февраль", label: "Февраль" },
  { value: "Март", label: "Март" },
  { value: "Апрель", label: "Апрель" },
  { value: "Май", label: "Май" },
  { value: "Июнь", label: "Июнь" },
  { value: "Июль", label: "Июль" },
  { value: "Август", label: "Август" },
  { value: "Сентябрь", label: "Сентябрь" },
  { value: "Октябрь", label: "Октябрь" },
  { value: "Ноябрь", label: "Ноябрь" },
  { value: "Декабрь", label: "Декабрь" },
];

export const gender: IOption[] = [
  { value: "Мужчина", label: "Мужчина" },
  { value: "Женщина", label: "Женщина" },
];

export const languages: IOption[] = [
  { value: "ru", label: "Русский" },
  { value: "en", label: "English" },
];
