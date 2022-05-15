import joi from 'joi';

const validateLogin = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
});

export default validateLogin;
