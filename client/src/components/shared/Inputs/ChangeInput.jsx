import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";

const ChangeInput = ({ text, type, name }) => {
  const changeValue = useSelector((state) => state.changeValue);
  const data = useSelector((state) => state.userData);
  console.log(data)

//   console.log(changeValue);

  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch({
      type: "CHANGE_CHANGE_VALUE",
      payload: {
        [e.target.name]: e.target.value,
      },
    });
    console.log(changeValue);
  };

  return (
    <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon1">{text}</InputGroup.Text>
      <Form.Control
        type={type}
        value={!changeValue[name] ? data[name] : changeValue[name]}
        onChange={onChange}
        name={name}
      />
    </InputGroup>
  );
};

export default ChangeInput;
