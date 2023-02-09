const Country = require('../models/country');
const _ = require('lodash');

class CountryCtrl {
	/**
 * Returns countries in DB.
 *
 * @return {any[]} countries in DB.
 */
	static async getAll(ctx) {
		try {
			const countries = await Country.getAll();

			ctx.body = countries;
		} catch (err) {
			ctx.body = err;
			ctx.status = 500;
		}
	}

	/**
 * Returns number of new cases in country of the last ten days.
 *
 * @param {string} id of country.
 * @return {number} number of new cases in country of the last ten days.
 */
  static async getNewCasesByCountry(ctx) {
    try {
			const id = _.get(ctx, 'params.id');

      const newCases = await Country.getNewCasesByCountry(id);

      ctx.body = newCases;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

  static create(data) {
    return Country.create(data);
  }
}

module.exports = CountryCtrl;
