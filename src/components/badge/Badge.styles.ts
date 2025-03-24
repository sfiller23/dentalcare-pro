import { styled } from "styled-components";
import { Variant } from "../../types/themeTypes";

export const StyledBadge = styled.div<{ variant: Variant; rounded: boolean }>`
  display: inline-flex;
  align-items: center;
  line-height: 1;
  border-radius: ${({ rounded }) => (rounded ? "999px" : "8px")};
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  height: 22px;
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: bold;
  text-align: center;
  white-space: nowrap;
`;
