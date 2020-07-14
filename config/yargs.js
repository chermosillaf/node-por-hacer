/**
 *  YARGS 
 */

const descripcion = {
      demand: true
    , alias: 'd'
    , description: 'Descripción del elemento'
}

const completado = {
      demand: true
    , alias: 'c'
    , description: 'Estado de la tarea'
} 

const argv = require('yargs').command( 'crear'
                                     , 'Crear un elemento por hacer '
                                     , { descripcion }
                                     
                                     )
                             .command( 'actualizar'
                                     , 'Actualizar el estado completado de una tarea '
                                     , { descripcion, completado }
                             )
                             .command( 'borrar'
                                     , 'Borrar una tarea '
                                     , { descripcion }
                             )
                             .help()        
                             .argv;
 
module.exports = {
    argv
}
