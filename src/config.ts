import {config as configDotenv} from 'dotenv'
import {resolve} from 'path'
const throwIfNot = function<T, K extends keyof T>(obj: Partial<T>, prop: K, msg?: string): T[K] {
    if(obj[prop] === undefined || obj[prop] === null){
      throw new Error(msg || `Environment is missing variable ${String(prop)}`)
    } else {
      return obj[prop] as T[K]
    }
}
  
export interface IProcessEnv {
    CONTENT_API: string
   
  }
  declare global {
    namespace NodeJS {
      interface ProcessEnv extends IProcessEnv { }
    }
}
['CONTENT_API'].forEach(v => {
    throwIfNot(process.env, v)
  })
switch(process.env.NODE_ENV) {
  case "development":
    console.log("Environment is 'development'")
    configDotenv({
      path: resolve(__dirname, "../.env.local")
    })
    break
  case "test":
    configDotenv({
      path: resolve(__dirname, "../.env.test")
    })
        break
  // Add 'staging' and 'production' cases here as well!
  default:
    throw new Error(`'NODE_ENV' ${process.env.NODE_ENV} is not handled!`)
}