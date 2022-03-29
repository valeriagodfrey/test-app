import React, { forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";

import { SearchIcon } from "../../../assets/icons/SearchIcon";

type Props = InputHTMLAttributes<HTMLInputElement>;

type SearchProps = Props;
export const SearchInput = forwardRef<HTMLInputElement, SearchProps>((params, ref) => {
  return (
    <>
      <SearchContainer>
        <Search {...params} ref={ref}></Search>
        <Icon>
          <SearchIcon />
        </Icon>
      </SearchContainer>
    </>
  );
});
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
`;
const Icon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 12px;
`;

const Search = styled.div``;
