import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";

const SignUpInput = ({ text, type, name, required }) => {
  const signUpValue = useSelector((state) => state.signUpValue);

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: "CHANGE_SIGN_UP_VALUE",
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
        value={signUpValue[name] || ""}
        onChange={onChange}
        name={name}
      />
    </InputGroup>
  );
};

export default SignUpInput;
