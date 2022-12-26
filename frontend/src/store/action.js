import axios from "./axios";


const server = {
  // USER MODULE
  signUp: (context) => axios.post("/user/signUp", context.state.signUp),
  login: (context) => axios.post("/user/login", {
      email: context.state.loginData.email,
      password: context.state.loginData.password,
  }),
  getUserByUsername: (context, params) => axios.get(`/user/getUserByUsername/${params.username}`, { params: { clubID: params.clubID }}),
  getUserByID: (context, params) => axios.get("/user/getUserByID", { params }),
  checkUser: (context, params) => axios.get("/user/checkUser", { params }),
  getAllUserByUsername: (context, params) => axios.get(`/user/getAllUserByUsername/${params}`),

  // CLUB MODULE
  createClub: (context, data) => axios.post("/club/createClub", data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  clubImage: (context, data) => axios.post("/club/image", data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  updateClubImage: (context, data) => axios.put('/club/updateClubImage', data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  getClub: () => axios.get("/club/getClub"),
  getClubProject: (context, params) => axios.get(`/club/getClubProject/${params}`),
  getClubMembers: (context, params) => axios.get("/club/getClubMembers", { params }),
  addClubMembers: (context, { data, params }) => axios.put("/club/addClubMembers", data, { params }),
  addPassbook: (context, { data, params }) => axios.put("/club/addPassbook", data, { params }),
  getPassbook: (context, params) => axios.get("/club/getPassbook", { params }),
  updatePassbookOrder: (context, { data, params }) => axios.put("/club/addPassbook", data, { params }),
  updatePassbookInform: (context, { data, params }) => axios.put("/club/addPassbook", data, { params }),
  updateIntro: (context, { data, params }) => axios.put("/club/updateIntro", data, { params }),
  addAnnounce: (context, { data, params }) => axios.put("/club/addAnnounce", data, { params }),
  deleteAnnounce: (context, params) => axios.delete("/club/deleteAnnounce", { params }),
  getAnnounce: (context, params) => axios.get("/club/getAnnounce", { params }),
  updateAnnounce: (context, { data, params }) => axios.put("/club/updateAnnounce", data, { params }),
  searchClub: async (context, params) => axios.get("/club/searchClub", { params }),
  joinApplication: (context, { data, params }) => axios.put("/club/joinApplication", data, { params }),
  getApplication: (context, params) => axios.get("/club/getApplication", { params }),
  updateApplication: (context, { data, params }) => axios.put("/club/updateApplication", data, { params }),

  // PROJECT MODULE
  createProject: (context, { data, params }) => axios.post("/project/createProject", data, { params }),
  endProject: (context, params) => axios.put("/project/endProject", null, { params }),
  addChecker: (context, { data, params }) => axios.put("/project/addChecker", data, { params }),
  getProject: (context, params) => axios.get("/project/getProject", { params }),
  updateProjectNameAndTheme: (context, { data, params }) => axios.put("/project/updateProjectNameAndTheme", data, { params }),
  addNewTags: (context, { data, params }) => axios.put("/project/addNewTags", data, { params }),
  getProjectTags: (context, params) => axios.get("/project/getProjectTags", { params }),

  // REVENUE MODULE
  createRevenue: (context, { data, params }) => axios.post("/revenue/createRevenue", data, {
    headers: { "Content-Type": "multipart/formdata" },
    params
  }),
  revenueImage: (context, data) => axios.post("/revenue/image", data, {
    headers: { "Content-Type": "multipart/formdata" },
  }),
  updateRevenue: (context, { data, params }) => axios.put("/revenue/updateRevenue", data, { params }),
  getAllRevenue: (context, params) => axios.get("/revenue/getAllRevenue", { params }),
  getTenRevenue: (context, params) => axios.get("/revenue/getTenRevenue", { params }),

};

export { server as default };
