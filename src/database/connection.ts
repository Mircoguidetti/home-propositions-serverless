import mysql from 'mysql'
import util from 'util'

const getMysqlConnection = () => {
  const config = {
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    connectionLimit: 50,
    connectTimeout: 60000,
    dateStrings: true,
    typeCast: function (field, next) {
      if (field.type === 'DATE' || field.type === 'TIMESTAMP') {
        return new Date(field.string()).getTime()
      }
      return next()
    },
  }
  const connection = mysql.createConnection(config)
  return {
    query(sql, args) {
      return util.promisify(connection.query).call(connection, sql, args)
    },
    close() {
      return util.promisify(connection.end).call(connection)
    },
    destroy() {
      return util.promisify(connection.destroy).call(connection)
    },
  }
}

const connection = getMysqlConnection()

export { connection }
