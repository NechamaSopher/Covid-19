const Router = require('koa-router');
const router = new Router({ prefix: '/country' });

const countryCtrl = require('../controllers/country');

router.get('/', countryCtrl.getAll);
router.get('/:id/new-cases', countryCtrl.getNewCasesByCountry);

module.exports = router.routes();
