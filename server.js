let express = require("express");
let path = require('path');

let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());






app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
})


//$('.dropdown-toggle').dropdown()