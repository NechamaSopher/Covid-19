const { Model } = require('objection');
const _ = require('lodash');

class ContryInfo extends Model {
  static get tableName() {
    return 'country_info';
  }

  toBody() {
    return {
      id: this.id,
      countryId: this.countryId,
      lastUpdatedDate: this.lastUpdatedDate,
      totalCases: this.totalCases,
      totalDeaths: this.totalDeaths,
      newCases: this.totalNewCases,
    };
  }

  static async create(data) {
    try {
      const countryInfo = await ContryInfo.query().insertGraphAndFetch(data);
      
      return countryInfo.toBody();
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create country info');
    }
  }

  static async getTopTotalCases(limit = 10) {
    try {
      const newCases = await ContryInfo.knex().raw(`
        SELECT name AS "countryName", total_cases AS "totalCases", total_deaths AS "totalDeaths"
        FROM country_info
        JOIN country
        ON country.id = Country_info.country_id
        ORDER BY total_cases DESC NULLS LAST
        LIMIT :limit`, { limit });

			return _.get(newCases, 'rows', []);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve top total cases countries');
    }
  }
}

module.exports = ContryInfo;
