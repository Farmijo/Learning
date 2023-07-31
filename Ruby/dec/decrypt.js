// Decrypt
const ciphertext =
  "JMUt9_l1mpz3NkXkgHJdfd7xqku50avR3wOly0D0qwVqLoArYtrDYrFyzhVOM5Ye0LAWqdqSDjkkmbWgVdaLq6Dhkn_VScNCxe0VUmXx2GMn_JR4iLEPHT3nMTTFXW87J0O6zOHPhVyLITi9RaK1ZQ8de67lEuSR4eiGJ6wRFNtni0kDO10DuvvLKRFM8bNgtcaS_Lvxua3jSlh1--VGqLF4HZ-rw0xh0Fhfpe5ATcQ=";
var encrypted = new Buffer(ciphertext, "base64");
var crypto = require("crypto");

var decipher = crypto.createDecipheriv(
  "aes-256-cbc",
  "01234567890123456789012345678901",
  "aaaaaaaaaaaaaaaa"
);
var dec = decipher.update(encrypted);
console.log(Buffer.concat([dec, decipher.final()]).toString());
