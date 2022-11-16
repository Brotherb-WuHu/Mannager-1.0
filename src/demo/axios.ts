import axios from 'axios'

axios
  .request({
    url: 'http://localhost:8085/test.json',
    method: 'get'
  })
  .then((res) => {
    console.log(res)
  })
