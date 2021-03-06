const { check } = require('express-validator');
const {checkValidationResults} = require("./validation");

const nameValidationChain = check('name', 'name must be not empty')
    .exists().bail()
    .notEmpty().bail()
    .isLength({min: 3, max: 255}).withMessage("name must be between 3 to 255 characters long");

const contentValidationChain = check('content','content must be not empty')
    .exists().bail()
    .notEmpty().bail()
    .isLength({min: 5}).withMessage("content must at least 5 characters long")

const categoryIdValidationChain =  check('categoryId', 'categoryId must be not empty')
    .exists().bail()
    .notEmpty().bail()
    .isNumeric({no_symbols: true}).withMessage("categoryId must be a valid integer value");


const inputValidation = [
    nameValidationChain,
    contentValidationChain,
    categoryIdValidationChain,
    checkValidationResults
];

module.exports = {
    inputValidation
};