var mongoose = require('mongoose');
var schema = require ('./schema');
var linereader = require('line-reader');
mongoose.connect('mongodb://localhost:27017/bdcorreo');

var Correo = mongoose.model('Correo',schema,'correo');

linereader.eachLine('usuarios.csv',function(line,last){

    
        
    array = {};
    
    array = line.split(',');
    var correo = new Correo({
        nc : array[0],
        name : array[1],
        career : array[2],
        grade : array[3],
        email : array[4]
    })

    correo.save(function(error){
        if(error){
            console.log(error);
            process.exit(1);
        }
        
        
        
        if(last){
            console.log("Datos Importados correctamente");
            process.exit(0);

        }
        
    });
    
    


})
    