const data = require('./userData')



module.exports = {
    getUsers: function(req, res){

        if(req.query.favorites){
            console.log(req.query)
            const favorites = data.filter( (user) =>{
                if(user.favorites.includes(req.query.favorites)){
                    return user;
            }
        })
        return res.status(200).send(favorites)
        }

        if(req.query.age){
            const age = data.filter( (user) =>{
                if(user.age < req.query.age){
                    return user;
            }
        })
        return res.status(200).send(age)
    }
    
    if(req.query.lastname){
        console.log(req.query)
        const lastname = data.filter( (user) =>{
            if(user.last_name === req.query.lastname){
                return user;
        }
    })
    return res.status(200).send(lastname)
}
if(req.query.email){
    console.log(req.query)
    const email = data.filter( (user) =>{
        if(user.email === req.query.email){
            return user;
    }
})
return res.status(200).send(email)
}


return res.status(200).send(data)

    },


    getByID: function(req, res){
       
        const foundUser = data.filter((e) => e.id == req.params.Id);
        if(foundUser.length > 0) {
            res.status(200).send(foundUser[0]);
        } else {
            res.status(404).json(null);
        };
    },


    getAdmins: (req, res) =>{
        const adminArr = data.filter((e) => e.type == "admin");
        res.status(200).send(adminArr);
      },

      getNotAdmins: (req, res) =>{
        const notAdminArr = data.filter((e) => e.type !== "admin");
        res.status(200).send(notAdminArr);
      },

      getByType: (req, res) => {
        const searchedUserType = data.filter((e)=> e.type == req.params.userType);
        res.status(200).send(searchedUserType);
      },

      updateById: (req, res) => {
        for (let i = 0; i < data.length; i++) {
            if (req.params.Id == data[i].id) {
              data.splice(i, 1, req.body);
            }
          }
          res.status(200).send(data);

      },

      addUser: (req, res) =>{
        req.body.id = data.push(req.body);
        res.status(200).send(data);
      },
      DeleteById: (req, res) => {
        for (let i = 0; i < data.length; i++) {
            if (req.params.Id == data[i].id) {
              data.splice(i, 1);
            }
          }
          res.status(200).send(data);
      }

}