import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const OpenModal = ({ children, btnText, title, path }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Link href={btnText !== "Edith Profile" ? "/" : "/home"} as={btnText !== "Edith Profile" ? path : "/home"}>
        <Button
          onClick={handleShow}
          className="px-5 fw-bolder py-2 rounded-pill"
          variant="outline-primary"
        >
          {btnText}
        </Button>
      </Link>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default OpenModal;
