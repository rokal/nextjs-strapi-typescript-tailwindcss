module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("TALSEND_DB_HOST"),
        port: env.int("TALSEND_DB_PORT"),
        database: env("TALSEND_DB_NAME"),
        username: env("TALSEND_DB_USERNAME"),
        password: env("TALSEND_DB_PASSWORD"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
