import axios from "axios";

export default {
  saveUser:function(username,email,password) {
    return axios.post("/api/user",{username,email,password});
  },
  getUsers: function() {
    return axios.get("/api/user");
  },
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
};
