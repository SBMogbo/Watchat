
import axios from "axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies");
  },
  // Gets the movie with the given id
  getMovies: function(id) {
    return axios.get("/api/movies/" + id);
  },
  // Deletes the movie with the given id
  deleteMovies: function(id) {
    return axios.delete("/api/movies/" + id);
  },
  // Saves a movie to the database
  saveMovies: function(bookData) {
    return axios.post("/api/movies", bookData);
  }
};
