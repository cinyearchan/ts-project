const devConfig = {
  host: 'localhost',
  database: 'ts',
  user: 'root',
  password: 'mingluck'
}

const prodConfig = {
  host: 'xxx.xxx.xx.xx',
  database: 'ts',
  port: 3306
}

module.exports = process.env.NODE_ENV === 'development'? devConfig : prodConfig