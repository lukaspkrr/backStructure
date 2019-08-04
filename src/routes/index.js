module.exports = app => {
    let databaseInfo = app.api.databaseInfo

    app.route('/')
    .get(databaseInfo.findAll)
}
