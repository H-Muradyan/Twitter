import React from "react";
import Link from "next/link";

const AgreeText = () => {
  return (
    <p>
      <small>
        By signing up, you agree to the{" "}
        <Link href="https://twitter.com/en/tos">
          <a className="fw-bold" target="_blank">
            Terms of Service
          </a>
        </Link>{" "}
        and{" "}
        <Link href="https://twitter.com/en/privacy">
          <a className="fw-bold" target="_blank">
            Privacy Policy
          </a>
        </Link>
        , including{" "}
        <Link href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">
          <a className="fw-bold" target="_blank">
            Cookie Use.
          </a>
        </Link>
      </small>
    </p>
  );
};

export default AgreeText;
