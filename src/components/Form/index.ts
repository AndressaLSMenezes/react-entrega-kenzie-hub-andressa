import styled from "styled-components";

const Form = styled.form`
  width: 90%;
  margin-bottom: 25px;

  display: flex;
  flex-direction: column;

  label {
    font-size: var(--font-size-small);
    margin-bottom: 5px;
    color: var(--grey-0);
  }

  p {
    color: var(--Negative);
    font-size: var(--font-size-small);
  }
`;

export default Form;
