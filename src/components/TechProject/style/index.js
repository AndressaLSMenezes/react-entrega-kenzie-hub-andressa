import styled from "styled-components";

export const TechLanguage = styled.li`
  width: 90%;
  padding: 0 12px;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-4);
  color: var(--grey-0);
  border-radius: var(--border-radius);

  cursor: pointer;

  h3 {
    overflow: hidden;
  }

  div {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  div > p {
    color: var(--grey-1);
  }

  :hover {
    background: #343b41;
  }
`;
