var express= require('express');
var router = require('./api-routes');

var app=express();

// app.get('/', (request, response) => {
//     var params = {
//         TableName : "User",
//         Key : {
//             Id : 1
//         }
//     };
    
//     client.get(params, function(err, data)
//     {
//         if (err) {
//            response.send(err); 
//         } else {
//             response.send(data);
//         }
//     });
//     //response.send('Hello from Express!')
  
// })

app.use('/api', router)

var server=app.listen(3000,function() {});



