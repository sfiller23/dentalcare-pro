import { styled } from "styled-components";

export const StyledCard = styled.div<{
  fullWidth?: boolean;
  hoverEffect?: boolean;
  clickable?: boolean;
}>`
  width: ${(fullWidth) => (fullWidth ? "100%" : "auto")};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 1px 1px 7px 1px grey;

  ${({ hoverEffect }) =>
    hoverEffect &&
    `  
    &:hover {
            transform: scale(1.01);
        }
    `}

  ${({ clickable }) =>
    clickable &&
    `
        cursor: pointer;
    `}
`;
