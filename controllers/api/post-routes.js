const router = require(`express`).Router();
const { title } = require(`process`);
const { User, Post } = require(`../../models`);
const auth = require(`../../utils/auth`);

router.put(`/compose/`, async (req, res) => {
  console.log(req.body);
  try {
    await Post.update(
      {
        title: req.body.title,
        post: req.body.post,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post(`/new/`, async (req, res) => {
  console.log(req.body);
  try {
    await Post.create({
      title: req.body.title,
      post: req.body.post,
      author: req.body.id,
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete(`/delete`, auth.withAuth, async (req, res) => {
  console.log(`post id: ` + req.body.id);
  try {
    await Post.destroy({
      where: {
        id: req.body.id,
      },
    });
    res.status(200).json(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
