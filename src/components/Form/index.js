import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  margin-bottom: 25px;

  color: var(--grey-0);

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  label {
    /* width: 90%;
    text-align: start; */
    font-size: var(--font-size-small);
    margin-bottom: 5px;
  }

  select {
    width: 100%;
    height: 50px;
    margin-top: 5px;
    margin-bottom: 20px;

    background-color: var(--grey-2);

    border-radius: var(--border-radius);
    border: 2px solid transparent;

    color: var(--grey-1);

    :focus {
      border: 2px solid var(--grey-0);
      color: var(--grey-0);
    }
  }

  p {
    color: var(--Negative);
    font-size: var(--font-size-small);
  }
`;

export default Form;
