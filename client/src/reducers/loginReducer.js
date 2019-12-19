// no credentials (public user)
// const developmentType = null;
// const developmentAuth = null;
// const developmentid = null;
// const developmentCid = null;

// admin credentials (nep@gmail)
// const developmentType = 1;
// const developmentAuth = true;
// const developmentid = 13;
// const developmentCid = null;

// bootcamper credentials (dbananas@gmail.com)
// const developmentType = 2;
// const developmentAuth = true;
// const developmentid = 2;
// const developmentCid = null;

// company credentials (hmnep@gmail.com)
const developmentType = 2;
const developmentAuth = true;
const developmentid = 1;
const developmentCid = 1;

const initialState = {
  id: developmentid,
  email: null,
  first_name: null,
  last_name: null,
  skills: null,
  linkedin_url: null,
  auth: developmentAuth,
  user_types_id: developmentType,
  bootcamp_name: null,
  companies_id: developmentCid,
  profile_pic_url: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "user logged in":
      return {
        ...action.payload
      };
    case "user logged out":
      return state;
    default:
      return state;
  }
};

export default userReducer;
