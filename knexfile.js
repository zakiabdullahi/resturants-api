module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/rest.db3',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },

    seeds: {
      directory: './data/seeds',
    }

  },
};