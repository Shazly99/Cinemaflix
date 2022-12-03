import Joi from 'joi';

 
const validationForm = (user) => {
    const schema = Joi.object({
      first_name: Joi.string().alphanum().required().min(3).max(30).messages({
        "string.empty":"First name is not allowed to do empty",
      }),
      last_name: Joi.string().alphanum().required().min(3).max(30).messages({
        "string.empty":"Last Name is not allowed to do empty",
      }),
      age: Joi.number().required().min(16).max(30).messages({
        "string.empty":"Age is not allowed to do empty",
        "number.base":"Age must be a number",
        "number.min":"Age must be between 16 years to 30 years",
        "number.max":"Age must be between 16 years to 30 years"
      }),
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        "string.empty":"Email is not allowed to do empty",
      }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        "string.empty":"Password is not allowed to do empty",
        "string.pattern.base":"Password is not valid"
      })
    });
    return schema.validate(user, { abortEarly: false });
  } ;


  const validationlogin = (userLogin) => {
    const schema = Joi.object({ 
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).messages({
        "string.empty":"Email is not allowed to do empty",
      }),
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
        "string.empty":"Password is not allowed to do empty",
        "string.pattern.base":"Password is not valid"
      })
    });
    return schema.validate(userLogin, { abortEarly: false });
  } ;


  export default {validationForm ,validationlogin};