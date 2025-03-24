import { styled } from "styled-components";

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3px;
  margin: ${({ theme }) => theme.spacing(1)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.color.danger};
  }
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &:disabled {
    background-color: ${({ theme }) => theme.muted};
  }
`;
