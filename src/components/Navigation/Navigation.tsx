import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
            <Navbar.Brand>
              {user?.picture ? (
                <img
                  src={user?.picture || " "}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              ) : (
                " "
              )}
            </Navbar.Brand>
            <Navbar.Brand>Challenge ABM Interaxa</Navbar.Brand>
          </NavLink>
          <div>
            {isAuthenticated ? (
              <Button onClick={() => logout()}>logout</Button>
            ) : (
              <Button
                style={{ marginRight: "20px" }}
                onClick={() => loginWithRedirect()}
              >
                Login
              </Button>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
