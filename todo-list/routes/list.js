const router = require('express').Router();
const {getAllList} = require('../controllers/list');

router.route('/').get(getAllList);

module.exports = router;
