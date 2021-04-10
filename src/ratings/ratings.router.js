// const path=require("path")
const router = require("express").Router({mergeParams:true});
const methodNotAllowed = require("../errors/methodNotAllowed")
const controller = require("./ratings.controller");

router
  .route("/:ratingId")
  .get(controller.specId)
  .all(methodNotAllowed)

router
  .route("/")
  .get(controller.allRatings)
  .all(methodNotAllowed)
// router.route("/").get(controller.list).post(controller.create);

module.exports = router;
