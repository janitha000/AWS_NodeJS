var router = require('express').Router();
var user = require('../Controllers/UserController');


router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'This is a simple AWS node server',
    });
});

router.route('/user').get(user.get);
router.route('/test').get(user.test);

module.exports = router;