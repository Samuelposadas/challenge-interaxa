import { Table } from "react-bootstrap";

import TableRow from "../TableRow/TableRow";
import { User } from "../../interfaces/api";

interface Props {
  handleModal: (user: User) => void;
  users: User[];
  handleModaleDelete: (user: User) => void;
}

const TableContainer = ({ handleModal, users, handleModaleDelete }: Props) => {
  return (
    <Table variant="dark">
      <thead style={{ textAlign: "center" }}>
        <tr>
          <th>Name</th>
          <th>LastName</th>
          <th>Nationality</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      {users.map((user) => (
        <TableRow
          handleModaleDelete={() => handleModaleDelete(user)}
          key={user.id}
          user={user}
          handleModal={() => handleModal(user)}
        />
      ))}
    </Table>
  );
};

export default TableContainer;
