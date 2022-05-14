import joi from 'joi';

const validateUser = joi.object().keys({
  username: joi.string().min(3).required(),
  classe: joi.string().min(3).required(),
  level: joi.number().greater(1).required().messages({
    'number.greater': '"level" must be greater than or equal to 1',
  }),
  password: joi.string().min(8).required(),
});

export default validateUser;