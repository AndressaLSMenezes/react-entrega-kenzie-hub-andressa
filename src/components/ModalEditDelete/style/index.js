import styled from "styled-components";

export const ModalEdit = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #12121480;

  section {
    width: 90%;
    max-width: 369px;
    padding-bottom: 10px;

    background-color: var(--grey-3);
    border-radius: var(--border-radius);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--border-radius);
    /* gap: 45%; */

    width: 100%;
    height: 50px;

    background-color: var(--grey-2);
  }

  section > div > h3 {
    margin-left: 15px;
  }

  section > div > button {
    margin-right: 15px;
    background: none;
    color: var(--grey-1);
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 90%;
    padding: 25px;

    label {
      color: var(--grey-0);
    }

    p {
      color: var(--Negative);
      font-size: var(--font-size-small);
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        width: 49%;
      }
    }
  }
`;
