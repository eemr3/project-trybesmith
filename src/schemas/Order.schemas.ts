import joi from 'joi';

const validateOrder = joi.object({
  productsIds: joi.array().required(),
});

export default validateOrder;
