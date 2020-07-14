const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


// console.log( argv );

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        
        // console.log('Crear tarea ', tarea);
        break;

    case 'listar':
        // console.log('Listar tareas ');
        let listado = porHacer.getListado();

        console.log("=====================POR HACER========================".red);
        for (let tarea of listado) 
        {   
            console.log(`descripcion: ${tarea.descripcion} | estado : ${tarea.completado}`);
            
        }
        console.log("======================================================".red);
        break;

    case 'actualizar':
        // console.log('Actualizar tareas ');

        let actualizado = porHacer.setActualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;


    case 'borrar':
        console.log('Borrar tareas ');
        let borrar = porHacer.setBorrar(argv.descripcion);
        console.log(borrar);
        break;
    
    case 'buscar-estado':
        console.log('Buscar tareas por estado ');
        let filtro = porHacer.setBuscarEstado(argv.completado);
        console.log(filtro);
        break;
        
    
    
    default:
        console.log('Comando no existe');
        break;
}