const fs = require('fs');
const colors = require('colors');
const crearArchivo = async( base = 5, listar=false, hasta=20 ) => {

    try {



        let salida, consola = '';

        for(let i = 1; i <=hasta; i++){
            // console.log("5 x ", i, " = ", a*i);
            // console.log(`${ base } x ${ i } = ${ base * i}`);
            salida += `${ base } x ${ i } = ${ base * i}\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i}\n`;
        }

        if( listar){
            console.log("===================".green);
            console.log("  Tabla del: ".green, colors.blue( base));
            console.log("===================".green);
            console.log(consola);
        }

        // fs.writeFileSync(`tabla-${ base }.txt`, salida, (err) =>{
        //     if(err) throw err;

        //     console.log(`tabla-${ base }.txt creado`)
        // });

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);

        return `tabla-${ base }.txt`;    
    } catch (err) {
        throw err;
    }

    
}

module.exports = {
    crearArchivo
}