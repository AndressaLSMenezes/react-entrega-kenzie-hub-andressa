import styled from "styled-components";

const DashboardHeader = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div > button {
    background-color: var(--grey-3);

    color: var(--grey-0);
    font-size: 12px;
    font-weight: 600;

    width: 55px;
    height: 32px;

    border-radius: var(--border-radius);
  }
`;

export default DashboardHeader;
