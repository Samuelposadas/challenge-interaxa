
import Modal from "react-bootstrap/Modal";

interface Props {
  isOpen: boolean;
  children?: JSX.Element[] | JSX.Element;
  title: string;
}

const ContainerModal = ({ isOpen, children, title }: Props) => {
  return (
    <Modal show={isOpen}>
      <Modal.Header
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ContainerModal;
