const { exec } = require('child_process')

module.exports = ({ define }) => {
  define('shutdown', async (payload, { knex, errors, utils }) => {
    if (process.env.NODE_ENV === 'production') return exec('/etc/system_shutdown.sh')
    return;
  }, {
    auth: true
  })
}
