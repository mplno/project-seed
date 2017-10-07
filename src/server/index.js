require('babel-core/register')
require('babel-polyfill')


import server from './server'

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Started on ${port}`);
})
