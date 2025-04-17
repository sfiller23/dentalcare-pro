import { styled } from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.modalBackground};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  z-index: 999;
  /* animation: slideInFromBottom 0.5s ease-out forwards;

  @keyframes slideInFromBottom {
    from {
      transform: translateX(-50%) translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  } */
`;
