var AWS = require("aws-sdk");
AWS.config.update({region:'us-east-1'});

var client = new AWS.DynamoDB.DocumentClient();

exports.getItem =  function() {
    var params = {
        TableName : "User",
        Key : {
            Id : 1
        }
    };
    
    client.get(params, function(err, data)
    {
        if (err) {
           return err;
        } else {
            return data;
        }
    });
}