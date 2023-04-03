const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => res.send("Welcom to the place. Home of the thing."));

module.exports = router;
