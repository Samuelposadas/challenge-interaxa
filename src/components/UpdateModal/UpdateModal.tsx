import { Button, Form } from "react-bootstrap";

import ContainerModal from "../ContainerModal/ContainerModal";
import { User } from "../../interfaces/api";
import useUpdateModal from "./useUpdateModal";

interface Props {
  isOpenUpdateModal: boolean;
  handleModalUpdate: (user?: User, refresh?: boolean) => void;
  currentUser: User | null;
}

const UpdateModal = ({
  isOpenUpdateModal,
  handleModalUpdate,
  currentUser,
}: Props) => {
  const { formik } = useUpdateModal({ currentUser, handleModalUpdate });

  return (
    <ContainerModal isOpen={isOpenUpdateModal} title="Edit Post">
      <Form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
        <Form.Group controlId="validationFormik03">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationFormik03">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.lastName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationFormik03">
          <Form.Label>Nationality</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nationality"
            name="nationality"
            value={formik.values.nationality}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.nationality}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nationality}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationFormik03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="validationFormik03">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="number"
            placeholder="Age"
            name="age"
            value={formik.values.age || ""}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.age}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.age}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" style={{ margin: "5px" }}>
          Update User
        </Button>
        <Button onClick={() => handleModalUpdate()}>Close</Button>
      </Form>
    </ContainerModal>
  );
};

export default UpdateModal;
