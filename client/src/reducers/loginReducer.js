const developmentType = 3;
const developmentAuth = true;
const developmentid = 5;
const developmentCid = 3;

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
  companies_id: developmentCid
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
