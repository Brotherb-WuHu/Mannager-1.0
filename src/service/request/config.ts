let BASE_URL = 'http://localhost:8085'
let TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:8085'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://localhost:8085'
} else {
  BASE_URL = 'http://localhost:8085'
}

export { BASE_URL, TIME_OUT }
