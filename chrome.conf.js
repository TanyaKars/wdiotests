const hooks = require('./config/base.conf');
const base = require('./config/hooks.conf');
exports.config = {
    runner: 'local',

    maxInstances: 1,
    capabilities: [
        {
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
         },
    ],
    services: ['devtools'],

    ...base,
    ...hooks
}
