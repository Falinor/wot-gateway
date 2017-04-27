import http from 'http'
// import mongoose from './services/mongoose'

import api from './api'
import config from './config'
import express from './services/express'

const app = express(api);
const server = http.createServer(app);

// mongoose.connect(mongo.uri)

setImmediate(() => {
  server.listen(config.port, config.ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', config.ip, config.port, config.env)
  })
});

export default app
