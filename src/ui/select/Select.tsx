import React, { useState } from "react";
import Select, {
  ActionMeta,
  MultiValue,
  PropsValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import styled from "styled-components";

import { SelectArrowIcon } from "../../assets/icons/SelectArrowIcon";
import { CustomError } from "../error/Error";
import { IOption, IOptions } from "./data";

interface Props {
  placeholder?: string;
  error?: string;
  type?: "lang" | "default";
  options?: typeof IOptions;
  onChange?: (
    newValue: SingleValue<IOption> | MultiValue<IOption>,
    actionMeta: ActionMeta<IOption>,
  ) => void;
  value?: PropsValue<IOption>;
  defaultValue?: PropsValue<IOption>;
}
export const CustomSelect = ({ placeholder, type = "default", error, options, ...rest }: Props) => {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <SelectContainer onClick={() => setClick((s) => !s)}>
        <Select
          aria-errormessage={error}
          isSearchable
          menuIsOpen={click}
          placeholder={placeholder}
          styles={type === "default" ? Styles : StylesLang}
          closeMenuOnSelect
          options={options}
          onChange={rest.onChange}
        />
        <Icon>
          <SelectArrowIcon />
        </Icon>
      </SelectContainer>
      <CustomError error={error} />
    </Container>
  );
};

const Container = styled.div`
  height: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  max-width: 600px;
  margin-bottom: 24px;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Icon = styled.div`
  width: 18px;
  position: absolute;
  display: flex;
  right: 11px;
  cursor: pointer;
  align-items: center;
`;

const Styles: StylesConfig<IOption> = {
  control: (styles) => ({
    ...styles,
    border: `1px solid #D9D9D9 `,
    borderRadius: "2px",
    cursor: "pointer",
    padding: `1px`,
    alignItems: "center",
    display: "flex",
    ":hover": {
      ...styles[":hover"],
      borderColor: "#D9D9D9",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  placeholder: (styles) => ({
    ...styles,
    marginBottom: "2px",
    color: "#bfbfbf",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "transparent",
    justifyContent: "center",
    ":hover": {
      ...styles[":hover"],
      color: "transparent",
    },
  }),
};

const StylesLang: StylesConfig<IOption> = {
  control: (styles) => ({
    ...styles,
    border: `1px solid #D9D9D9 `,
    borderRadius: "2px",
    cursor: "pointer",
    padding: `1px`,
    alignItems: "center",
    display: "flex",
    ":hover": {
      ...styles[":hover"],
      borderColor: "#D9D9D9",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    backgroundColor: "transparent",
  }),
  placeholder: (styles) => ({
    ...styles,
    marginBottom: "2px",
    color: "#bfbfbf",
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    color: "transparent",
    justifyContent: "center",
    ":hover": {
      ...styles[":hover"],
      color: "transparent",
    },
  }),
};
