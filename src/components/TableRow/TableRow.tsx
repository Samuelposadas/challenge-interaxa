import { Button } from "react-bootstrap";
import { User } from "../../interfaces/api";

interface Props {
  user: User;
  handleModal: () => void;
  handleModaleDelete: () => void;
}

const TableRow = ({ user, handleModal, handleModaleDelete }: Props) => {
  return (
    <>
      <tbody style={{ textAlign: "center" }}>
        <tr>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>{user.nationality}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td style={{ width: "200px" }}>
            <Button
              onClick={handleModal}
              style={{ margin: "5px" }}
              variant="primary"
            >
              Edit
            </Button>
            {"  "}
            <Button variant="danger" onClick={handleModaleDelete}>
              Delete
            </Button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default TableRow;
