import * as yup from 'yup'

export const loginSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(6),
})
