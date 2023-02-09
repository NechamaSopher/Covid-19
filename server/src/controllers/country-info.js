const CountryInfo = require('../models/country-info');
const CountryCtrl = require('./country');

const _ = require('lodash');
const axios = require('axios');
const XLSX = require('xlsx');

class CountryInfoCtrl {
  /**
 * Inserts data to DB.
 * 
 * Fetches data from Our world in data.
 * Inserts to DB
 */
  static async insert(ctx) {
    try {
      const { data } = await axios.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.json');

      Promise.all(Object.keys(data).map( async c => {
        const currentCountry = data[c];

        if (!currentCountry.continent) return;

        const countryData = {
          code: c,
          name: currentCountry.location,
          continent: currentCountry.continent
        }
        const country = await CountryCtrl.create(countryData);

        const countryInfoData = {
          countryId: country.id,
          lastUpdatedDate: new Date(currentCountry.last_updated_date),
          totalCases: currentCountry.total_cases,
          totalDeaths: currentCountry.total_deaths,
          newCases: currentCountry.new_cases,
        }
        await CountryInfo.create(countryInfoData);
      }));

      ctx.body = 'Inserted data successfully';
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }

  /**
 * Returns countries total cases and deaths ordered by total cases.
 *
 * @param {number} limit opsional default to 10.
 * @return {any[]} countries total cases and deaths ordered by total cases.
 */
  static async getTopTotalCases(ctx) {
    try {
      const { limit } = _.get(ctx, 'query', {});

      const countries = await CountryInfo.getTopTotalCases(limit);

      ctx.body = countries;
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  }
}

module.exports = CountryInfoCtrl;