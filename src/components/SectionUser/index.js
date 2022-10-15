import styled from "styled-components";

const PersonalProfileBar = styled.section`
  width: 100%;
  padding: 20 0px;

  border: 2px solid var(--grey-3);

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > h1 {
    color: var(--grey-0);
  }

  div > p {
    color: var(--grey-1);
  }
`;

export default PersonalProfileBar;
