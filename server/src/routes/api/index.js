const router = require('express').Router();
router.use('/compounds', require('./compounds'));
module.exports = router;