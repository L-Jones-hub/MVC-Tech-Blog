const router = require(`express`).Router();
const auth = require(`../../utils/auth`);

const commentRoutes = require(`./comment-routes`);
const userRoutes = require(`./user-routes`);
const postRoutes = require(`./post-routes`);

route.use(`/comment`, commentRoutes);
route.use(`/users`, userRoutes);
route.use(`/post`, postRoutes);

module.exports = router;
