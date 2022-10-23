import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 20px;

  background-color: var(--grey-2);

  border-radius: var(--border-radius);
  border: 2px solid transparent;

  color: var(--grey-1);

  cursor: pointer;

  :focus {
    border: 2px solid var(--grey-0);
    color: var(--grey-0);
  }
`;
