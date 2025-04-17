import { styled } from "styled-components";
import { useAuth } from "../../../context/hooks";
import { refresh } from "../../../services/auth.service";
import { Button } from "../../button/Button";
import Typography from "../../Typography/Typography";
import Modal from "../Modal";

const StyledButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const StyledTitleContainer = styled.div`
  margin: 1rem;
`;

const RefreshModal = () => {
  const { isTokenExpired, setIsTokenExpired } = useAuth();
  return (
    <Modal isOpen={isTokenExpired}>
      <StyledTitleContainer>
        <Typography role="title" weight="title">
          Your session has expired
        </Typography>
      </StyledTitleContainer>
      <StyledButtonGroup>
        <Button
          onClick={() => {
            refresh();
            setIsTokenExpired(false);
            window.location.reload();
          }}
        >
          Stay
        </Button>
        <Button
          onClick={() => {
            setIsTokenExpired(false);
          }}
        >
          Close
        </Button>
      </StyledButtonGroup>
    </Modal>
  );
};

export default RefreshModal;
