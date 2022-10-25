import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const TweetInput = ({ type, name, placeholder, accept }) => {
  //   const tweetValue = useSelector((state) => state.tweetValue);

  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.id === "formFile") {
      dispatch({
        type: "CHANGE_TWEET_VALUE",
        payload: {
          [e.target.name]: URL.createObjectURL(e.target.files[0]),
        },
      });
    } else {
      dispatch({
        type: "CHANGE_TWEET_VALUE",
        payload: {
          [e.target.name]: e.target.value,
        },
      });
    }
  };
  return (
    <InputGroup className="mb-3">
      <Form.Control
        className="border-0 fs-4"
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        accept={accept}
      />
    </InputGroup>
  );
};

export default TweetInput;
