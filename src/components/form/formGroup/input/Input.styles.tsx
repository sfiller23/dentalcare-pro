import { styled } from "styled-components";

export const Input = styled.input`
  padding: 0.3rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 6px;
  font-size: 1rem;
`;
