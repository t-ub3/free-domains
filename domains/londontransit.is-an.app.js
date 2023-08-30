addSubDomain({
  description: 'Discord bot providing real-time London Transport information', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'londontransit', // desired subdomain name
  owner: {
    repo: 'https://github.com/t-ub3/LondonTransit',
    email: 'mbfrias@pm.me',
  },
  record: {
    CNAME: 't-ub3.github.io',
    A: ['185.199.108.153','185.199.109.153','185.199.110.153','185.199.111.153']
  },
