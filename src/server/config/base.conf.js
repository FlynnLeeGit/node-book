const Path = require('path')
export default {
  port: 3000,
  host: '0.0.0.0',
  views: Path.resolve(__dirname, '../views'),
  API_BASE_URL: 'https://jsonplaceholder.typicode.com'
}
