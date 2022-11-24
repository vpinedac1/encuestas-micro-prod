const BASE = '/home/centos/fintec/prod-encuestas-micro/bin/';
module.exports = {
  apps: [
    {
      name: 'api_encuestas',
      script: `/home/centos/dotnet/dotnet ${BASE}encuestas-api.dll --urls='http://0.0.0.0:8020'`,
    },
  ],
};


