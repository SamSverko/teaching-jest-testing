const axios = require("axios");

const functions = {
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.data)
      .catch((err) => "error"),
  initDatabase: () => {
    console.log("Database initialized...");
  },
  closeDatabase: () => {
    console.log("Database closed...");
  },
  checkName: () => {
    console.log("Checking names...");
  },
};

module.exports = functions;
