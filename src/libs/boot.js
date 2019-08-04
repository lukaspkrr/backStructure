module.exports = app => {
    app.listen(3000, function() {
        console.log(`Server running in port ${this.address().port}`)
    })
}

