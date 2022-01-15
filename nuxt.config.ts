const environment = process.env.NODE_ENV || 'local'
const env = require(`./env/${environment}.ts`)

module.exports = {
    router: {
        base: env.BASE_URL  
    },
    head: {
        link: [
            { rel: 'icon', type: 'image/x-icon', href: `${env.BASE_URL}favicon.ico` }
        ]
    }
}
