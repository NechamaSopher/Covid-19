const Router = require('koa-router');
const router = new Router({ prefix: '/country-info' });

const countryInfoCtrl = require('../controllers/country-info');

router.get('/top-total-cases', countryInfoCtrl.getTopTotalCases);

router.post('/insert-data', countryInfoCtrl.insert);

module.exports = router.routes();
