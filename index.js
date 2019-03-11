var sgMail = require('@sendgrid/mail');
var mongoose=require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/bdcorreo');
sgMail.setApiKey('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');

var Correo=mongoose.model('Correo',schema,'correo');

Correo.find({grade:{"$gte":3}},function(error,docs){
    for(i=0;i<docs.length;i++){
        if(docs[i].sendmail==false){
            var msg = {
                to: docs[i].email,
                from: 'brefpadillasi@ittepic.edu.mx',
                dynamic_template_data:{
                    name:docs[i].name,
                    qr: docs[i]._id,
                    nc:docs[i].nc,
                    grade:docs[i].grade,
                    career:docs[i].career
                },
                template_id:'d-18c64e47ca224eb68a90d8b8dd15d7f1',
                };
            Correo.update({_id:docs[i]._id},{$set: {"sendmail":true}},function(error,pass){});
            sgMail.send(msg)
            
        }
    }

    if(error){
        process.exit(1);
    }

    
});
 
