const router = require('express').Router();
const thoughtsRoute = require('./thoughts');
const usersRoute = require('./users');

router.use('/users', usersRoute);
router.use('/thoughts', thoughtsRoute);

module.exports = router;