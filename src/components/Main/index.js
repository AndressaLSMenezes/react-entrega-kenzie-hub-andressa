import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 10px 0;
`;

export const MainRegister = styled(Main)`
  padding-top: 105%;
  padding-bottom: 40%;
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
`;

export const DivRegister = styled.div`
  width: 90%;
  max-width: 370px;

  margin: 30px 0 15px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
