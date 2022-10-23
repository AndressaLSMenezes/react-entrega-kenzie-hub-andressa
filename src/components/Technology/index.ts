import styled from "styled-components";

export const Technology = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1200px;
  color: var(--grey-0);

  margin-top: 15px;

  button {
    width: 32px;
    height: 32px;

    border-radius: var(--border-radius);
    background-color: var(--grey-3);

    color: var(--grey-0);
    font-weight: var(--font-weight-semi-bold);
    font-size: 24px;
    padding: 5px;
  }
`;
