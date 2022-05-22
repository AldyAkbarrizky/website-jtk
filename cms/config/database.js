module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db4free.net'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'web_jtk'),
      user: env('DATABASE_USERNAME', 'jtk_admin'),
      password: env('DATABASE_PASSWORD', 'Bandung1999'),
      ssl: false
    },
  },
});
