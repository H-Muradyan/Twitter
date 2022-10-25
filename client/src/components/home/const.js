import Explore from "./Explore";
import HomeFeed from "./HomeFeed";
import exSmTwitter from "/public/images/exSmTwitter.svg";
import profileIcon from "/public/images/profileIcon.svg";
import hashIcon from "/public/images/hashIcon.svg";
import homeIcon from "/public/images/homeIcon.svg";
import Profile from "./Profile";

export const MENU = [
  { id: 0, name: exSmTwitter, component: <HomeFeed /> },
  { id: 1, name: "Home", component: <HomeFeed />, icon: homeIcon },
  { id: 2, name: "Explore", component: <Explore />, icon: hashIcon },
  { id: 3, name: "Profile", component: <Profile />, icon: profileIcon },
];
