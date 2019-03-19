var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

var sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

exports.getList = function (req, res) {
    var params = {};

    sqs.listQueues(params, function (err, data) {
        if (err)
            res.send(err);
        else
            res.send(data);
    })
}

exports.send = function (req, res) {
    var params = {
        MessageAttributes: {
            "Title": {
                DataType: "String",
                StringValue: "Node Message"
            },
            "Author": {
                DataType: "String",
                StringValue: "Janitha Tennakoon"
            },
            "WeeksOn": {
                DataType: "Number",
                StringValue: "6"
            }
        },
        MessageBody: "This is a simple node js sqs message to server",
        QueueUrl: "https://sqs.us-east-1.amazonaws.com/914556018196/NodeQueue"
    };

    sqs.sendMessage(params, function (err, data) {
        if (err)
            res.send(err);
        else
            res.send(data.MessageId);
    })

}

exports.get = function (req, res) {
    var queueURL = "https://sqs.us-east-1.amazonaws.com/914556018196/NodeQueue";

    var params = {
        AttributeNames: [
            "SentTimestamp"
        ],
        MaxNumberOfMessages: 1,
        MessageAttributeNames: [
            "All"
        ],
        QueueUrl: queueURL,
        VisibilityTimeout: 20,
        WaitTimeSeconds: 0
    };

    sqs.receiveMessage(params, function(err, data){
        if(err)
            res.send(err);
        else if(data.MessageId){
            var message = data;
            var deleteParams = {
                QueueUrl: queueURL,
                ReceiptHandle: data.Messages[0].ReceiptHandle
              };
            
            sqs.deleteMessage(deleteParams, function(err, data){
                if(err)
                    res.send(err)
                else{
                    res.send(message);
                }
            })
        }
    })
}
