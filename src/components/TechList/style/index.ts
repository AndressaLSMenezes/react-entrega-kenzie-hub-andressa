import styled from "styled-components";

export const TechUl = styled.ul`
  margin-top: 26px;

  width: 90%;
  max-width: 1200px;
  padding: 24px 0;

  background-color: var(--grey-3);
  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  nav {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 0;

    button {
      width: 20%;
      height: 35px;
    }
  }
`;
