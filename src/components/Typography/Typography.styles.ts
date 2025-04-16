import { HTMLAttributes } from "react";
import { styled } from "styled-components";
import { Colors, FontSizes, FontWeights } from "../../types/themeTypes";

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  role?: keyof FontSizes;
  color?: keyof Colors;
  weight?: keyof FontWeights;
}

export const StyledTypography = styled.p<TypographyProps>`
  font-size: ${({ theme, role }) => theme.fontSizes[role as string]};
  color: ${({ theme, color }) => theme.colors[color as string]};
  font-weight: ${({ theme, weight }) => theme.fontWeights[weight as string]};
`;
