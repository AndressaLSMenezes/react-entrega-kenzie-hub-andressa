import styled from "styled-components";

export const Button = styled.button`
  height: 48px;
  width: 100%;

  border-radius: var(--border-radius);
  border: none;

  cursor: pointer;

  color: var(--grey-0);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-semi-bold);
`;

export const GreyButton = styled(Button)`
  background-color: var(--grey-1);
`;

export const PinkButton = styled(Button)`
  background-color: var(--color-primary);

  :focus {
    background-color: var(--color-primary-Focus);
  }
`;

export const BlackButton = styled(Button)`
  width: 55px;
  height: 32px;

  background: var(--grey-3);
  border-radius: var(--border-radius);

  font-size: var(--font-size-small);
`;
