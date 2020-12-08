import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?s=";
const APIKEY = "f3927da0";

export default {
  omdbSearch: async function(query) {
      const response = await fetch(BASEURL + query + '&apikey=' +APIKEY);
      return await response.json() 
  },
  saveUser:function(username,email,password) {
    return axios.post("/api/user",{username,email,password});
  },
  updateUser: function(id) {
    return axios.put("/api/user/" + id);
  },
  getUsers: function() {
    return axios.get("/api/user");
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  logIn:function(email,password) {
    return axios.post("/api/auth/login",{email,password});
  },
  verifyAuthentication:function() {
    return axios.get("/api/auth/login",{
      headers: {
        Authorization:localStorage.getItem("authorization-token")
      }
    })
  }
};
