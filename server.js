const express = require('express')
, bodyParser = require('body-parser')
, userCtrl = require("./userCtrl")


const app = express();



app.use(bodyParser.json());


app.get("/api/users", userCtrl.getUsers)
app.get("/api/users/:Id", userCtrl.getByID)
app.get("/api/admins" , userCtrl.getAdmins)
app.get("/api/nonadmins" , userCtrl.getNotAdmins)
app.get("/api/user_type/:userType", userCtrl.getByType)
app.put("/api/users/:Id", userCtrl.updateById)
app.post("/api/users", userCtrl.addUser)
app.delete("/api/users/:Id", userCtrl.DeleteById)
const PORT = 3000;
app.listen(PORT, console.log(`I'm listening... port: ${PORT}`));