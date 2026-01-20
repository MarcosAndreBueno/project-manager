const PROXY_CONFIG = [
    {
      context: ['/api/tickets'],
      target: 'http://ticket-service:8080/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/api/users'],
      target: 'http://user-service:8081/',
      secure: false,
      logLevel: 'debug'
    },
    {
      context: ['/api/teams'],
      target: 'http://team-service:8082/',
      secure: false,
      logLevel: 'debug'
    },
  ];

  module.exports = PROXY_CONFIG;
