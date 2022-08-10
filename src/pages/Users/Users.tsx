import TableContainer from "../../components/TableContainer/TableContainer";

import { Button, Col, Container, Row } from "react-bootstrap";

import AddModal from "../../components/AddModal/AddModal";

import { Toaster } from "react-hot-toast";
import UpdateModal from "../../components/UpdateModal/UpdateModal";

import useUsers from "./useUsers";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import { useAuth0 } from "@auth0/auth0-react";

const Users = () => {
  const {
    loading,
    data: users,
    error,
    currentUser,
    isOpenAddModal,
    isOpenDeleteModal,
    isOpenUpdateModal,
    handleModalAdd,
    handleModalUpdate,
    handleModaleDelete,
  } = useUsers();
  const { user } = useAuth0();

  if (loading)
    return (
      <Container
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Loading />
      </Container>
    );
  if (error) return <Error />;
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col md={12} xs={12}>
          <Container style={{ display: "flex", gap: "30px" }}>
            <Button
              onClick={() => handleModalAdd()}
              size="lg"
              variant="success"
            >
              Add Post
            </Button>

            {user && <h2>Hello {user?.name}</h2>}
          </Container>
          <br />
          <br />
          <TableContainer
            handleModal={handleModalUpdate}
            users={users}
            handleModaleDelete={handleModaleDelete}
          />
          {isOpenAddModal && (
            <AddModal isOpen={isOpenAddModal} handleModal={handleModalAdd} />
          )}
          {isOpenUpdateModal && (
            <UpdateModal
              currentUser={currentUser}
              isOpenUpdateModal={isOpenUpdateModal}
              handleModalUpdate={handleModalUpdate}
            />
          )}
          {isOpenDeleteModal && (
            <DeleteModal
              isOpenDeleteModal={isOpenDeleteModal}
              handleModaleDelete={handleModaleDelete}
              currentUser={currentUser}
            />
          )}
          <Toaster position="top-center" reverseOrder />
        </Col>
      </Row>
    </Container>
  );
};

export default Users;
