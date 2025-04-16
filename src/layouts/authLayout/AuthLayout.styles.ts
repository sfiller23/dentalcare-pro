import { styled } from "styled-components";

export const StyledAuthLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;
