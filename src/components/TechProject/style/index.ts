import styled from "styled-components";

export const TechLanguage = styled.li`
  width: 95%;
  height: 49px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--grey-4);
  color: var(--grey-0);
  border-radius: var(--border-radius);

  cursor: pointer;

  h3 {
    margin-left: 12px;
    overflow: hidden;
  }

  p {
    margin-right: 12px;
    color: var(--grey-1);
  }

  :hover {

    background: #343b41;
  }
`;
