var router = require('express').Router();
var user = require('../Controllers/UserController');
var queue = require('../Controllers/QueueController');


router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'This is a simple AWS node server',
    });
});

router.route('/user').get(user.get);
router.route('/test').get(user.test);
router.route('/queue').get(queue.getList);
router.route('/queue/send').get(queue.send);
router.route('/queue/get').get(queue.get);

module.exports = router;