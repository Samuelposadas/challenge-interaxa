import { Button, Form } from "react-bootstrap";
import ContainerModal from "../ContainerModal/ContainerModal";
import useAddModal from "./useAddModal";

interface Props {
  isOpen: boolean;
  handleModal: (refresh?: boolean) => void;
}

const AddModal = ({ isOpen, handleModal }: Props) => {
  const { formik } = useAddModal({ handleModal });

  return (
    <ContainerModal isOpen={isOpen} title="Add new post">
      <Form onSubmit={formik.handleSubmit} style={{ textAlign: "center" }}>
        <Form.Group controlId="validationFormik03">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            isInvalid={!!(formik.errors.name && formik.touched.name)}
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
            isInvalid={!!(formik.errors.lastName && formik.touched.lastName)}
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
            isInvalid={
              !!(formik.errors.nationality && formik.touched.nationality)
            }
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
            isInvalid={!!(formik.errors.email && formik.touched.email)}
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
            isInvalid={!!(formik.errors.age && formik.touched.age)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.age}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" style={{ margin: "5px" }}>
          Add User
        </Button>
        <Button onClick={() => handleModal()}>Close</Button>
      </Form>
    </ContainerModal>
  );
};

export default AddModal;
