let BASE_URL_WHY = ''
let TIME_OUT_WHY = 10000

let BASE_URL_HAN = ''
let TIME_OUT_HAN = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL_WHY = 'http://152.136.185.210:5000'
  BASE_URL_HAN = 'http://localhost:8085'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL_WHY = 'http://152.136.185.210:5000'
  BASE_URL_HAN = 'http://localhost:8085'
} else {
  BASE_URL_WHY = 'http://152.136.185.210:5000'
  BASE_URL_HAN = 'http://localhost:8085'
}

export { BASE_URL_WHY, TIME_OUT_WHY, BASE_URL_HAN, TIME_OUT_HAN }
