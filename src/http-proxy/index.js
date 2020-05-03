var httpProxy = require('http-proxy')

httpProxy.createServer({
  target: {
    host: 'amikom.ac.id',
    port: 80
  },
  ssl: {
    key: fs.readFileSync('/etc/letsencrypt/live/bayukurnia.xyz-0001/fullchain.pem', 'utf8'),
    cert: fs.readFileSync('/etc/letsencrypt/live/bayukurnia.xyz-0001/fullchain.pem', 'utf8')
  }
}).listen(443);