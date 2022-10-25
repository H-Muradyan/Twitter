import React, { memo } from "react";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import { MENU } from "./const";
import Image from "next/image";
import Dropdown from "./Dropdown";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { deleteUser } from "../../actions/auth/deleteUser";
const Sidebar = () => {
  const data = useSelector((state) => state.userData);

  const dispatch = useDispatch();
  const router = useRouter();
  const deleteAccount = deleteUser();

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.clear();
    router.push("/");
  };

  const deletUser = async (id) => {
    try {
      const res = await deleteAccount(id);
      dispatch({
        type: "DELETE_USER",
        payload: null,
      });
      window.localStorage.clear();
      router.push("/");
    } catch (err) {
      console.log("catched", err);
    }
  };
  return (
    <Col className="container d-flex flex-column justify-content-between " xl={3}>
      <Nav variant="pills" className="flex-column position-fixed">
        {MENU.map((item, i) => {
          return (
            <Nav.Item key={item.id} className="mb-1">
              {item.id === 0 ? (
                <Nav.Link className="activeNone" eventKey={item.name}>
                  <Image src={item.name}></Image>
                </Nav.Link>
              ) : (
                <Nav.Link className="sideBarNav d-flex" eventKey={item.name}>
                  <Image src={item.icon}></Image>
                  <span className="navIcon fs-5">{item.name}</span>
                </Nav.Link>
              )}
            </Nav.Item>
          );
        })}
      </Nav>
      <NavDropdown
        className="sideBarNav py-3 px-5 position-fixed bottom-0"
        id="nav-dropdown-light-example"
        title="User"
        menuVariant="light"
      >
        <NavDropdown.Item onClick={() => deletUser(data.id)}>Delete user</NavDropdown.Item>
        <NavDropdown.Item onClick={logOutHandler}>Log out User</NavDropdown.Item>
      </NavDropdown>
    </Col>
  );
};

export default memo(Sidebar);
