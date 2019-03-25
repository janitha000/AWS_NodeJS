var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

var translate = new AWS.Translate({apiVersion: '2017-07-01'});

exports.getTranslate = function(req, res){
    var text = req.query.text;
    console.log(text);
    var params = {
        SourceLanguageCode: 'en',
        TargetLanguageCode: 'es',
        Text : text
    }

    translate.translateText(params, function(err, data)
    {
        if(err)
            res.send(err);
        else
        {
            res.send(data.TranslatedText);
        }
            
    })
}