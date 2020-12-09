import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?s=";
const IDURL = "http://www.omdbapi.com/?i="
const APIKEY = "f3927da0";

const API = {
  omdbSearch: async function (query) {
    const response = await fetch(BASEURL + query + '&apikey=' + APIKEY);
    return await response.json()
  },
  omdbSearchById:async function (id) {
    console.log(IDURL + id + '&apikey=' + APIKEY)
    const response = await fetch(IDURL + id + '&apikey=' + APIKEY);
    return await response.json()
  },
  saveUser: function (username, email, password) {
    return axios.post("/api/user", { username, email, password });
  },
  updateUser: function (id) {
    return axios.put("/api/user/" + id);
  },
  getUsers: function () {
    return axios.get("/api/user");
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  logIn: function (email, password) {
    return axios.post("/api/auth/login", { email, password });
  },
  verifyAuthentication: function () {
    return axios.get("/api/auth/login", {
      headers: {
        Authorization: localStorage.getItem("authorization-token")
      }
    })
  },
  saveToWatchedList: function (userId, movieId, poster, movieTitle) {
    return axios.post("/api/watched", {userId, movieId, poster, movieTitle});
  },
  getWatchedList: function () {
    return axios.get("/api/watched");
  },
  saveToToWatchList: function (userId, movieId, poster, movieTitle) {
    return axios.post("/api/toWatch", { userId, movieId, poster, movieTitle });
  },
  getToWatchList: function () {
    return axios.get("/api/toWatch");
  },
  saveToRewiewsList: function (userId, movieId, poster, movieTitle, reviewTitle, review, recommendationId) {
    return axios.post("/api/reviews", { userId, movieId, poster, movieTitle, reviewTitle, review, recommendationId })
  },
  getRewiewsList: function () {
    return axios.get("/api/reviews");
  },
};
export default API