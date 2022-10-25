import React, { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { allUsers } from "../../actions/auth/allUsers";
import { me } from "../../actions/auth/me";
import { update } from "../../actions/auth/update";
import ChangeInput from "../shared/Inputs/ChangeInput";
import OpenModal from "../shared/OpenModal";
import { validators } from "../shared/Validators";

function main() {
  const back = document.querySelector(".arrow_back");

  back.innerHTML =
    '<svg viewBox="0 0 24 24" class="r-61mi1v r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path></g></svg>';

  const tabs = document.querySelectorAll(".tabs > div");

  const selectTab = (tab) => () => {
    tabs.forEach((tab) => tab.classList.remove("selected"));
    tab.classList.add("selected");
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", selectTab(tab));
  });
}

function switchTheme() {
  document.body.classList.toggle("light-theme");
}
const Profile = () => {
  const data = useSelector((state) => state.userData);
  const changeValue = useSelector((state) => state.changeValue);


  const dispatch = useDispatch();

  const getUserData = me();
  const changeData = update();

  


  const changeProfile = async (id, e) => {
    e.preventDefault();
    validators(changeValue);

    if (Object.values(validators(changeValue))[0]) {
      return toast.error(Object.values(validators(changeValue))[0]);
    }
    let obj = data;
    for (let key in changeValue) {
      obj[key] = changeValue[key];
    }

    try {
      const res = await changeData(obj, id);
      if (res.data) {
        dispatch({
          type: "CHANGE_DATA",
          payload: obj,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const userData = async () => {
    try {
      const res = await getUserData();
      if (res.data) {
        dispatch({
          type: "GET_DATA",
          payload: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userData();
    main();
  }, []);
  return (
    <>
      <div className="content">
        <div className="navigation">
          <div className="arrow_back">arrow</div>
          <div className="header d-flex">
            {data.firstName} {data.lastName}
          </div>
          <div className="subtext">25 Tweet</div>
        </div>
        <div className="wallpaper"></div>
        <div className="bio">
          <div className="pre-bio">
            <div className="pfp"></div>
            <OpenModal btnText="Edith Profile" title="Change your profile" path="signup">
              <Form onSubmit={(e) => changeProfile(data.id, e)} autoComplete="off" className="mt-3">
                <ChangeInput text="Name" type="text" name="firstName" />
                <ChangeInput text="Surname" type="text" name="lastName" />
                <ChangeInput text="Phone" type="phone" name="phone" />
                <Modal.Footer>
                  <Button type="submit" className="rounded-pill" variant="primary">
                    Change
                  </Button>
                </Modal.Footer>
              </Form>
            </OpenModal>
          </div>

          <div>
            <div className="header">
              {data.firstName} {data.lastName}
            </div>
          </div>
          <div>
            <span className="secondary">
              Joined {new Date(data.createdAt).toLocaleDateString("en-US", { month: "long" })}{" "}
              {new Date(data.createdAt).getFullYear()}{" "}
            </span>
          </div>

          <div>
            15 <span className="secondary">Following</span>
            12 <span className="secondary">Followers</span>
          </div>
        </div>

        <div className="tabs">
          <div className="selected">Tweets</div>
          <div>Tweets & replies</div>
          <div>Media</div>
          <div>Likes</div>
        </div>
      </div>

      <div className="controls">
        <button onClick={switchTheme} className="btn">
          Switch theme
        </button>
      </div>
    </>
  );
};

export default Profile;
