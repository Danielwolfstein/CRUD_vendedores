const axios = require("axios");

exports.homeRoutes = (req, res)=>{
    //Make a get request to /api/Users
    axios.get("https://interfazvendedores.herokuapp.com/api/users")
        .then(function(response){
            console.log(response);
            res.render('index',{users:response.data });
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.add_user=(req, res)=>{
    res.render("add_user");
}
exports.update_user=(req, res)=>{
    axios.get('https://interfazvendedores.herokuapp.com/api/users', {params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}