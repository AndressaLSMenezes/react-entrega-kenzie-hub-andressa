import styled from "styled-components";

const Input = styled.input`
  outline: none;
  box-shadow: 0 0 0 0;
  border: 2px solid transparent;
  border-radius: 4px;
  margin-top: 5px;
  margin-bottom: 20px;

  width: 96%;
  height: 40px;
  padding: 0 5px;
  background-color: var(--grey-2);

  ::placeholder {
    color: var(--grey-1);
  }

  :focus {
    border: 2px solid var(--grey-0);

    ::placeholder {
      color: var(--grey-0);
    }
  }
`;

export default Input;
