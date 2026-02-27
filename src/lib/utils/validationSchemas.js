import Joi from 'joi';

export const bookingSchema = Joi.object({
    firstName: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': `First name should be a type of 'text'`,
            'string.empty': `First name cannot be an empty field`,
            'string.min': `First name should have a minimum length of {#limit}`,
            'string.max': `First name should have a maximum length of {#limit}`,
            'any.required': `First name is a required field`
        }),
    lastName: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .messages({
            'string.base': `Last name should be a type of 'text'`,
            'string.empty': `Last name cannot be an empty field`,
            'string.min': `Last name should have a minimum length of {#limit}`,
            'string.max': `Last name should have a maximum length of {#limit}`,
            'any.required': `Last name is a required field`
        }),
    phone: Joi.string()
        .trim()
        .pattern(/^[0-9]+$/)
        .min(10)
        .max(15)
        .required()
        .messages({
            'string.base': `Phone number should be a type of 'text'`,
            'string.empty': `Phone number cannot be an empty field`,
            'string.pattern.base': `Phone number must contain only digits`,
            'string.min': `Phone number should have a minimum length of {#limit} digits`,
            'string.max': `Phone number should have a maximum length of {#limit} digits`,
            'any.required': `Phone number is a required field`
        }),
    email: Joi.string()
        .trim()
        .email({ tlds: { allow: false } }) // false for simplicity
        .required()
        .messages({
            'string.base': `Email should be a type of 'text'`,
            'string.empty': `Email cannot be an empty field`,
            'string.email': `Email must be a valid email address`,
            'any.required': `Email is a required field`
        }),
    checkInDate: Joi.date()
        .iso()
        .min('now') // Check-in date cannot be in the past
        .required()
        .messages({
            'date.base': `Check-in date must be a valid date`,
            'date.format': `Check-in date must be in ISO format (YYYY-MM-DD)`,
            'date.min': `Check-in date cannot be in the past`,
            'any.required': `Check-in date is a required field`
        }),
    checkOutDate: Joi.date()
        .iso()
        .greater(Joi.ref('checkInDate')) // Check-out date must be after a day from check-in date
        .required()
        .messages({
            'date.base': `Check-out date must be a valid date`,
            'date.format': `Check-out date must be in ISO format (YYYY-MM-DD)`,
            'date.greater': `Check-out date must be after a day from check-in date`,
            'any.required': `Check-out date is a required field`
        }),
    adults: Joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            'number.base': `Adults must be a number`,
            'number.integer': `Adults must be an integer`,
            'number.min': `At least {#limit} adult is required`,
            'any.required': `Adults is a required field`
        }),
    children: Joi.number()
        .integer()
        .min(0)
        .default(0) // Default value is set if not provided - not required
        .messages({
            'number.base': `Children must be a number`,
            'number.integer': `Children must be an integer`,
            'number.min': `Children cannot be less than {#limit}`            
        }),
    boardType: Joi.string()
        .valid('Breakfast', 'Half-board')
        .required()
        .messages({
            'string.base': `Board type should be a type of 'text'`,
            'any.only': `Board type must be either 'Breakfast' or 'Half-Board'`,
            'any.required': `Board type is a required field`
        }),
    note: Joi.string()
        .trim()
        .max(500)
        .allow('') // Empty string for optional field
        .messages({
            'string.base': `Note should be a type of 'text`,
            'string.max': `Note should not exceed {#limit} of characters`
        }),            
});