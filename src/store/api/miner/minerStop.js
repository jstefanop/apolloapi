const { exec } = require('child_process')

module.exports = ({ define }) => {
  define('stop', async (payload, { knex, errors, utils }) => {
    exec('sudo systemctl stop apollo-miner')
  }, {
    auth: true
  })
}
