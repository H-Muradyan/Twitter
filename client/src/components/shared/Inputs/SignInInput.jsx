import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";

const SignInInput = ({ text, type, name, required }) => {
  const signInValue = useSelector((state) => state.signInValue);

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: "CHANGE_SIGN_IN_VALUE",
      payload: {
        [e.target.name]: e.target.value,
      },
    });
  };
  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
      <Form.Control
        required={required}
        type={type}
        value={signInValue[name] || ""}
        onChange={onChange}
        name={name}
      />
    </InputGroup>
  );
};

export default SignInInput;
