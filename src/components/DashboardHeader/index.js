import styled from "styled-components";

const DashboardHeader = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  background-color: var(--grey-4);

  div {
    width: 90%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default DashboardHeader;
