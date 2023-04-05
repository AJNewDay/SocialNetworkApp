const { User } = require("../../models");

module.exports = {
  // Get all users
  getUser(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
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
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    res.json("User was created");
  },

  // get single user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Get thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
    res.json({});
  },
  // create thoughts
  createThoughts(req, res) {
    Thoughts.create(req.body)
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    res.json("Thought posted");
  },

  // get friends
  getFriends(req, res) {
    Friends.find()
      .then((friends) => res.json(friends))
      .catch((err) => res.status(500).json(err));
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

  // add a friend
  addFriend(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      );
    res.json("You have a new friend");
  },

  // delete thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : User.deleteMany({ _id: { $in: thoughts.users } })
      )
      .then(() =>
        res.json({ message: "Thought deleted. Hopefully nobody saw it . . ." })
      )
      .catch((err) => res.status(500).json(err));
  },

  // delete friend
  deleteFriend(req, res) {
    Friends.findOneAndDelete({ _id: req.params.friendId })
      .then((friend) =>
        !friend
          ? res.status(404).json({ message: "No friend with that ID" })
          : Friends.deleteOne({ _id: { $in: friends } })
      )
      .then(() => res.json({ message: "Friendship terminated." }))
      .catch((err) => res.status(500).json(err));
  },
};
