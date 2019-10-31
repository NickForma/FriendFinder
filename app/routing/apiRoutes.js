let path = require('path');



module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

   

}