import { Button, Container } from "react-bootstrap";
import { User } from "../../interfaces/api";
import ContainerModal from "../ContainerModal/ContainerModal";
import useDeleteModal from "./useDeleteModal";

interface Props {
  isOpenDeleteModal: boolean;
  handleModaleDelete: (user?: User, refresh?: boolean) => void;
  currentUser: User | null;
}

const DeleteModal = ({
  isOpenDeleteModal,
  handleModaleDelete,
  currentUser,
}: Props) => {

  const { handleDeleteUser } = useDeleteModal({ handleModaleDelete,currentUser });

  return (
    <ContainerModal
      isOpen={isOpenDeleteModal}
      title={`are you sure delete this user?`}
    >
      <Container
        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
      >
        <h3>{currentUser?.name}</h3>
        <h3>{currentUser?.lastName}</h3>
      </Container>
      <Container
        style={{ display: "flex", justifyContent: "center", gap: "20px" }}
      >
        <Button variant="danger" onClick={handleDeleteUser}>
          Yes
        </Button>
        <Button onClick={() => handleModaleDelete()}>No</Button>
      </Container>
    </ContainerModal>
  );
};

export default DeleteModal;
