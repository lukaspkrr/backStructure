module.exports = app => {
    let api = {}

    api.findAll= (req, res) => {
        //Array cras
        const cras = []

        for (let i = 0; i < cras.length; i++) {
            const knex = app.connection.knexConnection(cras[i])
            
            //codigo aqui dentro
            
        }
    }

    return api
}