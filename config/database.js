module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      ssl: { rejectUnauthorized: false },
    },
  },
});