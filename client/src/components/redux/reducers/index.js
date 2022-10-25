import { combineReducers } from "redux";
import { allUsersDataReducer } from "./allUsersData";
import { authReducer } from "./auth";
import { ChangeValueReducer } from "./ChangeValue";
import { SignInValueReducer } from "./SignInValue";
import { SignUpValueReducer } from "./SignUpValue";
import { tweetdataReducer } from "./tweetData";
import { TweetValueReducer } from "./TweetValue";
import { userDataReducer } from "./userData";

const rootReducer = combineReducers({
  signInValue: SignInValueReducer,
  signUpValue: SignUpValueReducer,
  tweetValue: TweetValueReducer,
  userData: userDataReducer,
  auth: authReducer,
  changeValue: ChangeValueReducer,
  allUsersData: allUsersDataReducer,
  tweetData: tweetdataReducer,
});

export default rootReducer;
