const getAppKeys = (env) => {
  const configuredKeys = env
    .array('APP_KEYS', [])
    .map((key) => `${key}`.trim())
    .filter(Boolean);

  if (configuredKeys.length > 0) {
    return configuredKeys;
  }

  return [
    env('JWT_SECRET'),
    env('ADMIN_JWT_SECRET'),
    env('API_TOKEN_SALT'),
    env('TRANSFER_TOKEN_SALT'),
  ].filter(Boolean);
};

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  app: {
    keys: getAppKeys(env),
  },
});
