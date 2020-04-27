let express = require("./config/imports").express;
let bodyparser = require("./config/imports").bodyparser;
let cors = require("./config/imports").cors;

let app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors());


app.use("/fetch",require("./fetch/fetch"));
app.use("/insert",require("./insert/insert"));
app.use("/update",require("./update/update"));
app.use("/delete",require("./delete/delete"));


app.listen(8080);
console.log("The Server port no 8080 is Running");