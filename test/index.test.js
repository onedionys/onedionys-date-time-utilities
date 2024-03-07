const assert = require('assert');
const { formatDate } = require('../src/dateUtils');

describe('Date Utilities', function () {
  describe('#formatDate()', function () {
    it('should return formatted date in dd-mm-yyyy format', function () {
      const date = new Date('2022-03-07');
      const formattedDate = formatDate(date);
      assert.strictEqual(formattedDate, '07-03-2022');
    });
  });
});
