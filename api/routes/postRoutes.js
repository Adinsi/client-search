const router = require("express").Router();
const postController = require("../controler/postcontroler");
const authControler = require("../controler/authControler");
const multer = require("multer");
const upload = multer();

router.get(
  "/",
  // authControler.verifyToken,
  postController.readPost
);
// router.post("/", postController.createPost);
router.get("/:id", postController.userPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/user/:id", postController.getByUserId);
router.patch("/signal-post/:id", postController.SignalPost);
router.patch("/like-post/:id", postController.likePost);
router.patch("/unsignal-post/:id", postController.unSignalPost);
router.patch("/unlike-post/:id", postController.unlikePost);

// comments
router.patch("/comment-post/:id", postController.commentPost);
router.patch("/edit-comment-post/:id", postController.editCommentPost);
router.patch("/delete-comment-post/:id", postController.deleteCommentPost);
module.exports = router;
