export const serverMode = 'localEnvironment'

let API = {
  defaultPath: "",
}

switch (serverMode) {
  case 'localEnvironment': {
    API = {
      defaultPath: 'http://localhost:8080',
    }
    break
  }
  default:
}

export default API
