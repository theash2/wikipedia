import { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app){
  app.use(registerElement)
}
