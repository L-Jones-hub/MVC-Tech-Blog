const router = require(`express`).Router();
const { User, Post, Comment } = require(`../../models`);
const { restore } = require("../../models/users");
const auth = require(`../../utils/auth`);

router.post(`/new`, async (req, res) => {
  console.log(req.body);
  try {
    await Comment.create({
      comment: req.body.comment,
      comment_author_id: req.body.id,
      blog_id: req.body.blog_id,
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete(`/del`, auth.withAuth, async (req, res) => {
  console.log(req.body);
  try {
    await Comment.destroy({
      where: {
        id: req.body.comment_id,
      },
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
