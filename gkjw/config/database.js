module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'gkjwprob_db'),
      user: env('DATABASE_USERNAME', 'gkjwprob'),
      password: env('DATABASE_PASSWORD', ''),
    },
    debug: false,
  },
});

