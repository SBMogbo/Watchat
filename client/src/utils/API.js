import axios from "axios";

export default {
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
