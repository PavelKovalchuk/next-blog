const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'mongoPaul',
        mongodb_password: 'dsN6kdxUS8WepQin',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'next-blog-dev',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'mongoPaul',
      mongodb_password: 'dsN6kdxUS8WepQin',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'next-blog',
    },
  };
};
