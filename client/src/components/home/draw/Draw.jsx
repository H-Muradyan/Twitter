import Image from "next/image";
import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import searchIcon from "/public/images/searchIcon.svg";
import avatar from "/public/images/avatar.png";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { allUsers } from "../../../actions/auth/allUsers";

const Draw = () => {
  const allUsersData = useSelector((state) => state.allUsersData);

  const getAllUsers = allUsers();
  const dispatch = useDispatch();

  const dataAllUsers = async () => {
    try {
      const res = await getAllUsers();
      if (res.data) {
        dispatch({
          type: "GET_ALL_USERS_DATA",
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dataAllUsers();
  }, []);

  return (
    <aside className="position-fixed top-0 mt-3">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          <Image src={searchIcon} alt="search icon" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search Twitter"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <div className="right-sidebar">
        <h3 className="fw-bold">Trends for you</h3>
        <div className="trend--item">
          <div className="d-flex justify-content-between">
            <small className="text-muted">Trending in Armenia</small>
            <b className="dot-icon">...</b>
          </div>
          <b>#Iran</b>
          <small className="text-muted">103K Tweets</small>
        </div>
        <div className="trend--item">
          <div className="d-flex justify-content-between">
            <small className="text-muted">Politics · Trending</small>
            <b className="dot-icon">...</b>
          </div>
          <b>#Armenia</b>
          <small className="text-muted">9,307 Tweets</small>
        </div>
      </div>
      {allUsersData &&
        allUsersData.length !== 0 &&
        allUsersData[0].map((user) => {
          return (
            <div className="right-sidebar mt-3 ">
              <h3 className="fw-bold">Who to follow</h3>

              <div className="trend--item d-flex">
                <div>
                  <div className="avatar ml-1">
                    <Image src={avatar} alt="avatar" />
                  </div>
                  <b>Barack Obama </b>
                  <small className="text-muted">@BarackObama</small>
                </div>
                <Button variant="dark">Follow</Button>
              </div>
            </div>
          );
        })}
    </aside>
  );
};

export default Draw;
