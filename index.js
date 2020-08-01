/*!
 *   is-greater-than <https://github.com/AprixStudios/is-greater-than>
 */


const isNumber = require('is-number');

module.exports = function isGreaterThan(value1, value2) {
    const x = Math.abs(value1);
  if (!isNumber(x)) {
    throw new TypeError('A number was expected but not received.');
  }
  if (!Number.isInteger(x)) {
    throw new Error('Number is not a integer.');
  }
  if (!Number.isSafeInteger(x)) {
    throw new Error('Number is not a safe integer.');
  }
  const y = Math.abs(value2);
  if (!isNumber(y)) {
    throw new TypeError('A number was expected but not received.');
  }
  if (!Number.isInteger(y)) {
    throw new Error('Number is not a integer.');
  }
  if (!Number.isSafeInteger(y)) {
    throw new Error('Number is not a safe integer.');
  }
  return x > y;
}