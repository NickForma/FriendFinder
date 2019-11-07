let express = require("express");
let path = require("path");

let app = express();
let PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/public"));
app.use(express.static("app/data"));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
