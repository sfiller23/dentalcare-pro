import { styled } from "styled-components";

export const ErrorText = styled.p<{ center?: boolean }>`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
  margin-top: 0.25rem;
  text-align: ${({ center }) => (center ? "center" : "left")};
`;
