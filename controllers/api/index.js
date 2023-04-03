module.exports = {
  // Get all users
  getUsers(req, res) {
    res.json([
      {
        first: "Aaron",
        last: "Jordan",
        Age: 33,
        id: 1,
      },
      {
        first: "Guy",
        last: "McGuy",
        Age: 33,
        id: 2,
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
    res.json("Thought posted");
  },

  // get friends
  getFriends(req, res) {
    res.json([
      {
        first: "Friendy",
        last: "Friend",
        Age: 33,
        id: 3,
      },
      {
        first: "Some",
        last: "Friend",
        Age: 33,
        id: 4,
      },
    ]);
  },

  // create users
  addFriend(req, res) {
    res.json("You have a new friend");
  },
};
