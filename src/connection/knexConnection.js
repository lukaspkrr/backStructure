const knex = require('knex')

module.exports = () => cra => {
    return knex({
        client: 'mysql',
        connection:{
            host: '',
            user: '',
            password: '',
            database: ''
        }
    })   
}