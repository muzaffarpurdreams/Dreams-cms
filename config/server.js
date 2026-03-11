module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', env('RENDER_EXTERNAL_URL', '')),
  ENABLE_SEED_DATA: env.bool('ENABLE_SEED_DATA', env('NODE_ENV', 'development') !== 'production'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
