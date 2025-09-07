// utils/dataUtils.js

function generateRandomString(length = 8) {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

function generateRandomEmail() {
  return `${getRandomString(6)}@testmail.com`;
}

function generateRandomNumber(min = 1000, max = 9999) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generateRandomDate(start = new Date(2000, 0, 1), end = new Date()) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
  generateRandomString,
  generateRandomEmail,
  generateRandomNumber,
  generateRandomDate
};
