import { styled } from "styled-components";

export const StyledCard = styled.div<{
  fullWidth: boolean;
  hoverEffect?: boolean;
  clickable?: boolean;
  shadow?: boolean;
  maxWidth?: string;
  spacing?: number;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "unset")};
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme, spacing }) =>
    spacing ? theme.spacing(spacing) : theme.spacing(2)};
  box-shadow: ${({ shadow }) =>
    shadow &&
    `
         1px 1px 7px 1px grey;
    `};

  box-shadow: ${({ hoverEffect }) =>
    hoverEffect &&
    `  
    &:hover {
            transform: scale(1.01);
        }
    `};
  ${({ clickable }) =>
    clickable &&
    `
        cursor: pointer;
    `};
`;
