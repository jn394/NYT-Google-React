import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {

  //Searchs for a book
  search: function (query) {
    return axios.get(BASEURL + query);
  },

  //Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};