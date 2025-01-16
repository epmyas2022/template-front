import { Plugin } from 'vite'
import * as yup from 'yup'

export * as Schema from 'yup'

export function ValidateEnv(schema: yup.ObjectShape) {
  return {
    name: 'environment-validator',

    config() {
      const env = process.env

      const schemaShape = yup.object().shape(schema)

      schemaShape.validateSync(env)
    },
  } as Plugin
}
