var db = require('../database/database')

exports.get =  function (req,res)
{
    db.getItem(function(err, data){
         res.json(data);
     });
}

exports.test =  function(req, res)
{
    res.json("Controller working");
}