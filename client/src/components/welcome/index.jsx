import Image from "next/image";
import React, { useState } from "react";
import smallTwitter from "/public/images/smallTwitter.svg";
import Button from "react-bootstrap/Button";
import WelcomeImage from "./WelcomeImage";
import AgreeText from "./AgreeText";
import OpenModal from "../shared/OpenModal";
import { Form } from "react-bootstrap";
import SignInInput from "../shared/Inputs/SignInInput";
import SignUpInput from "../shared/Inputs/SignUpInput";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import { validators } from "../shared/Validators";
import { toast } from "react-toastify";
import { register } from "../../actions/auth/register";
import axios from "axios";
import { login } from "../../actions/auth/login";

const Welcome = () => {
  const dispatch = useDispatch();
  const signUpValue = useSelector((state) => state.signUpValue);
  const signInValue = useSelector((state) => state.signInValue);
  const router = useRouter();

  const signupHandeler = async (e) => {
    e.preventDefault();
    validators(signUpValue);

    if (Object.values(validators(signUpValue))[0]) {
      return toast.error(Object.values(validators(signUpValue))[0]);
    }

    try {
      const res = await register(signUpValue);
      localStorage.setItem("auth", JSON.stringify(res.data.token.token));

      console.log(res);
      router.push("home");
    } catch (err) {
      toast.error(err.message);
    }
  };

  const signinHandeler = async (e) => {
    e.preventDefault();

    try {
      const res = await login(signInValue);
      if (res.data) {
        //1. Save user info
        localStorage.setItem("auth", JSON.stringify(res.data.token.token));

        console.log(res.data.token.token);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
      }
      console.log(res);
      router.push("home");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="d-flex">
      <WelcomeImage />
      <div className="px-5 py-5">
        <div className="mb-5">
          <Image src={smallTwitter} alt="small twitter icon" />
        </div>
        <h2 className="title mb-5">Happening now</h2>
        <h3 className="fw-bold">Join Twitter today.</h3>
        <div className="d-flex flex-column mt-5">
          <OpenModal btnText="Sign up" title="Create your account" path="signup">
            <Form onSubmit={signupHandeler} autoComplete="off" className="mt-3">
              <SignUpInput
                text="Name"
                type="text"
                name="firstName"
                signUpValue={signUpValue}
                required={true}
              />
              <SignUpInput text="Surname" type="text" name="lastName" required={true} />

              <SignUpInput text="Email" type="email" name="email" required={true} />
              <SignUpInput text="Password" type="password" name="password" required={true} />
              <SignUpInput text="Phone" type="phone" name="phone" required={true} />

              <SignUpInput text="Birthday" type="date" name="birthday" required={false} />
              <Modal.Footer>
                <Button type="submit" className="rounded-pill" variant="primary">
                  Sign up
                </Button>
              </Modal.Footer>
            </Form>
          </OpenModal>
          <AgreeText />
          <OpenModal btnText="Sign in" title="ashdbasdbks" path="signin">
            <Form onSubmit={signinHandeler} autoComplete="off" className="mt-3">
              <SignInInput text="Email" type="email" name="email" required={true} />
              <SignInInput text="Password" type="password" name="password" required={true} />
              <Modal.Footer>
                <Button type="submit" className="rounded-pill" variant="primary">
                  Sign in
                </Button>
              </Modal.Footer>
            </Form>
          </OpenModal>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
