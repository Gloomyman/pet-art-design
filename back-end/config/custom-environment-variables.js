module.exports = {
  rollbar: {
    accessToken: 'ROLLBAR_ACCESS_TOKEN',
    payload: {
      environment: 'ROLLBAR_ENVIRONMENT',
    },
  },
  defaultLogLevel: 'DEFAULT_LOG_LEVEL',
  aem: {
    url: 'AEM_URL',
    token: 'AEM_TOKEN',
  },
  db: {
    connection: {
      host: 'DB_HOST',
      user: 'DB_USER',
      password: 'DB_PASSWORD',
      database: 'DB_NAME',
    },
    connectionString: 'DB_CONNECTION_STRING',
  },
  facebook: {
    client_secret: 'FACEBOOK_SECRET',
    client_id: 'FACEBOOK_ID',
    callback_url: 'FACEBOOK_CALLBACK',
  },
  jwt: {
    secret: 'JWT_SECRET',
  },
};
