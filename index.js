console.log("i'm connected");
/* ------------------------------ declarations ------------------------------ */
const profileAboutID = "#profile-about";
const profileNameID = "#profile-name";

const selectors = {
  sprofileAboutID: "#profile-about",
  sprofileNameID: "#profile-name",
};

/* --------------------------------- class to use with object -------------------------------- */
class UserInfoObj {
  constructor({ nameObjSelector, aboutObjSelector }) {
    this._profileNameObjElement = document.querySelector(nameObjSelector);
    this._profileAboutObjElement = document.querySelector(aboutObjSelector);
  }
  testO() {
    console.log(this._profileNameObjElement);
    console.log(this._profileAboutObjElement);
  }
}
/* --------------------- class to use with other things --------------------- */
class UserInfo {
  constructor(nameSelector, aboutSelector) {
    // debugger;
    this._profileNameElement = document.querySelector(nameSelector);
    this._profileAboutElement = document.querySelector(aboutSelector);
  }

  test() {
    console.log(this._profileNameElement);
    console.log(this._profileAboutElement);
  }
}
/* --------------------------- initialize classes --------------------------- */

const newUserInfo = new UserInfo("#profile-name", profileAboutID);
console.log("using string ID, then const");
newUserInfo.test();

const newUserInfoSelectors = new UserInfo(
  selectors.sprofileNameID,
  selectors.sprofileAboutID
);
console.log("using object and key");
newUserInfoSelectors.test();

const newUserInfoObj = new UserInfoObj({
  nameObjSelector: profileNameID,
  aboutObjSelector: profileAboutID,
});
console.log("using {} with constructor parameters");
newUserInfoObj.testO();
