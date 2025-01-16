import { loadEnv, Plugin, type ConfigEnv } from 'vite'
import * as yup from 'yup'

export * as Schema from 'yup'

export function ValidateEnv(schema: yup.ObjectShape) {
  return {
    name: 'environment-validator',
    config(_config, env: ConfigEnv) {
      const enviroments = loadEnv(env.mode, process.cwd())

      const schemaShape = yup.object().shape(schema)

      schemaShape.validateSync(enviroments, {
        strict: true,
      })
    },
  } as Plugin
}
