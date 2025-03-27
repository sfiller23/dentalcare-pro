import { styled } from "styled-components";

export const StyledModal = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  position: fixed;
  opacity: 0.8;
  z-index: 999;
  animation: slideInFromBottom 0.5s ease-out forwards;

  @keyframes slideInFromBottom {
    from {
      transform: translateX(-50%) translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
`;
