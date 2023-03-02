const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: true,
        describe: 'Este es el numero hasta donde quieres la tabla'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv;


console.log(argv)


module.exports = argv