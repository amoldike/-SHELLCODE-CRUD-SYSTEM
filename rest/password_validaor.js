const passwordValidator = require("password-validator");

const schema = new passwordValidator();

const specialChars = [
  "@",
  "%",
  "&",
  "!",
  "#",
  "$",
  "%",
  "&",
  "*",
  "+",
  "-",
  "/",
  "<",
  "=",
  ">",
  "?",
];

schema
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits(1)
  .is()
  .not()
  .oneOf(specialChars);

const validator = (password) => {
  return schema.validate(password); //will return true if valid or false if invalid
};

module.exports = validator;
