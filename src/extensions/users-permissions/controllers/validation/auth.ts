import utils from "@strapi/utils";

const { yup, validateYupSchema } = utils;
const callbackBodySchema = yup.object().shape({
  identifier: yup.string().required(),
  password: yup.string().required(),
});

const registerSchema = yup.object({
  email: yup.string().email().required(),
  username: yup.string().required(),
  password: yup.string().required(),
});

export const validateRegisterBody = validateYupSchema(registerSchema);
export const validateCallbackBody = validateYupSchema(callbackBodySchema);
