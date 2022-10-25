import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TweetInput from "../shared/Inputs/TweetInput";
import Image from "react-bootstrap/Image";
import TweetIcons from "./TweetIcons";
import Post from "../Post";
import { useSelector } from "react-redux";
import { BsCloudFogFill } from "react-icons/bs";
import { postTweet } from "../../actions/auth/postTweet";
const HomeFeed = () => {
  const tweetValue = useSelector((state) => state.tweetValue);
  const postText = postTweet();

  const postHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await postText(tweetValue.text);
      if (res.data) {
        dispatch({
          type: "POST_TWEET",
          payload: res.data,
        });
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="fs-4 fw-bold">Home</div>
      <Form onSubmit={postHandler}>
        <TweetInput placeholder="What's happening?" name="text" type="text" />
        <Image
          src={tweetValue.file}
          style={{ width: "100%", height: "0%", cursor: "pointer" }}
          className="me-3"
        />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between w-25">
            <TweetIcons />
          </div>

          <Button type="submit" className="rounded-pill" variant="primary">
            Tweet
          </Button>
        </div>
      </Form>
      <hr></hr>
      <Post />
    </>
  );
};

export default HomeFeed;
