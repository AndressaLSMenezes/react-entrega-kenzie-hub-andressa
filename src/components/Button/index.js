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
`;

export const BlackButton = styled(Button)`
  width: 70px;
  background: var(--grey-3);
  font-size: var(--font-size-small);
`;
