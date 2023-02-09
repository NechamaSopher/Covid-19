const Router = require('koa-router');

const countryRoutes = require('./country');
const countryInfoRoutes = require('./country-info');

const router = new Router({ prefix: '/api' });

router.use(countryRoutes);
router.use(countryInfoRoutes);

module.exports = router.routes();
