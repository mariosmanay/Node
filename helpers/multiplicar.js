const fs = require('fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida = ''
        let consola = ''



        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${base * i}\n`);
            consola += (`${base} ${'x'.yellow} ${i} = ${base * i}\n`);
        }

        if (listar) {
            console.log('=================='.green)
            console.log( colors.blue(`Tabla del ${base}`))
            console.log('=================='.green)
            console.log(consola)
        }



        fs.writeFileSync(`./salida/tabla-${base}`, salida)

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}