type color = `#${string}`;
type px = `${number}px`;
type rem = `${number}rem`;
export interface Colors {
  primary: color;
  secondary: color;
  accent: color;
  textPrimary: color;
  textSecondary: color;
  background: color;
  border: color;
  success: color;
  warning: color;
  danger: color;
  sidebarBg: color;
  icon: color;
  modalBackground: string;
}
export interface BorderRadius {
  sm: px;
  md: px;
  lg: px;
}
export interface FontSizes {
  info: rem;
  label: rem;
  subtitle: rem;
  title: rem;
}

export interface FontWeights {
  info: number;
  label: number;
  subtitle: number;
  title: number;
}
export interface ButtonSizes {
  sm: rem;
  md: rem;
  lg: rem;
}

export interface Theme {
  colors: Colors;
  spacing: (factor: number) => rem;
  borderRadius: BorderRadius;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  buttonSizes: ButtonSizes;
}

export type Variant = "primary" | "secondary" | "danger" | "success" | "info";
export type Direction = "horizontal" | "vertical";
