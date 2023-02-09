const { Model } = require('objection');
const _ = require('lodash');

class Contry extends Model {
  static get tableName() {
    return 'country';
  }

  toBody() {
    return {
      id: this.id,
      code: this.code,
      name: this.name,
      continent: this.continent
    };
  }

  static async create(data) {
    try {
      const country = await Contry.query().insertGraphAndFetch(data);
      
      return country.toBody();
    } catch (err) {
      console.error(err);
      throw new Error('Failed to create country');
    }
  }

	static async getAll() {
    try {
      const countries = await Contry.query();

      return countries.map(c => c.toBody());
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve countries');
    }
  }

  static async getNewCasesByCountry(id) {
    try {
      const newCases = await Contry.knex().raw(`
				SELECT new_cases
				FROM country
				JOIN country_info
				ON country_info.country_id = country.id
				WHERE country_id = :id
					AND country_info.last_updated_date > (CURRENT_DATE - INTERVAL '10 days')`, { id });

			return _.get(newCases, 'rows[0].new_cases', 0);
    } catch (err) {
      console.error(err);
      throw new Error('Failed to retrieve new cases by country');
    }
  }
}

module.exports = Contry;
