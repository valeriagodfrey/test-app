import styled from "styled-components";

import i18n from "../../translations/i18n";
import { languages } from "./data";

export const LangSelect = () => {
  return (
    <div className="select">
      <Select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        {languages.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </Select>
    </div>
  );
};

const Select = styled.select`
  border: 0;
  outline: 0;
  box-shadow: none;
  appearance: none;
  background: url("data:image/svg+xml;utf8,<svg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'fill='#1890ff'/></svg>")
    no-repeat;
  background-position: right !important;
  color: #1890ff;
  font-size: 16px;
  line-height: 24px;
`;
