const router = require(`express`).Router();
const { escapeExpression } = require("handlebars");
const { Post, Comment, User } = require(`../models`);
const auth = require(`../utils/auth`);

router.get(`/`, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render(`home`, {
      posts,
      loggedIn: req.session.loggedIn,
      userName: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get(`/post/:id`, async (res, req) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });
    if (postData) {
      const post = postData.get({ plain: true });
      res.render("single-post", { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get(`/login`, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect(`/`);
    return;
  }
  res.render(`login`);
});

router.get(`/signup`, (req, res) => {
  if (req.session.loggedIn) {
    res.redirect(`/`);
    return;
  }
  res.render(`signup`);
});

module.exports = router;
