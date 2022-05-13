import joi from 'joi';

const validateProduct = joi.object({
  name: joi.string().min(3).required(),
  amount: joi.string().min(3).required(),
});

export default validateProduct;
