import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 0;

  img {
    margin: 30px 0;
    height: 20px;
  }
`;

export const Div = styled.div`
  background-color: var(--grey-3);
  width: 90%;
  max-width: 370px;
  padding-top: 40px;
  padding-bottom: 20px;

  border-radius: var(--border-radius);

  display: flex;
  flex-direction: column;
  align-items: center;

  div > h2 {
    color: var(--grey-0);
    margin-bottom: 30px;
  }
  h2 {
    color: var(--grey-0);
    margin-bottom: 22px;
  }

  p {
    color: var(--grey-1);
    margin-bottom: 22px;
  }
`;

export const DivLogin = styled.div`
  width: 90%;
  p {
    color: var(--grey-1);
    margin-bottom: 22px;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 100%;

    border-radius: var(--border-radius);

    color: var(--grey-0);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-semi-bold);

    background-color: var(--grey-1);
  }
`;

export const DivRegister = styled.div`
  width: 90%;
  max-width: 370px;

  margin: 30px 0 15px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 70px;

    background: var(--grey-3);
    border-radius: var(--border-radius);

    color: var(--grey-0);
    font-weight: var(--font-weight-semi-bold);
    font-size: var(--font-size-small);
  }
`;
