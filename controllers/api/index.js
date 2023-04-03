module.exports = {
  // Get all users
  getUsers(req, res) {
    res.json([
      {
        first: "Aaron",
        last: "Jordan",
        Age: 33,
      },
      {
        first: "Guy",
        last: "McGuy",
        Age: 33,
      },
    ]);
  },

  // create users
  createUsers(req, res) {
    res.json("User was created");
  },

  // get single user
  getSingleUser(req, res) {
    res.json({
      id: req.params.userId,
    });
  },

  // Get thoughts
  getThoughts(req, res) {
    res.json({});
  },
  // create thoughts
  createThoughts(req, res) {
    res.json("Thougth was created");
  },
};
