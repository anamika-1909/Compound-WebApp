module.exports = {
  'username': process.env.MYSQL_USER || 'root',
  'password': process.env.MYSQL_PASSWORD || 'sona123',
  'database': process.env.MYSQL_DATABASE || 'compoundDB',
  'host': process.env.MYSQL_HOST ||'localhost',
  'port': process.env.MYSQL_PORT || '3306',
  'dialect': 'mysql',
};