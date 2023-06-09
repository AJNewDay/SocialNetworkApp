const router = require("express").Router();
const {
  getUser,
  createUsers,
  getSingleUser,
  getThoughts,
  createThoughts,
  getFriends,
  addFriend,
  deleteThought,
  deleteFriend,
} = require("../../controllers/api");

// /api/users
router.route("/users").get(getUser).post(createUsers);

// /api/users/:userId
router.route("/users/:userId").get(getSingleUser);
//   .put(updateUser)
//   .delete(deleteUser);

// /api/thoughts
router.route("/thoughts").get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtId
// router
//   .route("/thoughts:thoughtId")
//   .get(getSingleThought)
//   .put(updateThought)
//   .delete(deleteThought);

router.route("/friends").get(getFriends).post(addFriend);
router.route("/thoughts").get(getThoughts).delete(deleteThought);
router.route("/friends").get(getFriends).delete(deleteFriend);
module.exports = router;
