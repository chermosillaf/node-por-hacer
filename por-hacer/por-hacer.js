
const colors = require('colors');
const fs = require('fs');

let listadoPorHacer = [];

const guardarData = async () => {
    
    return new Promise( (resolve, reject ) => {

        let data = JSON.stringify(listadoPorHacer);

        fs.writeFile(`./db/data.json`, data, (err) => {
            if (err) 
            {
                reject(err);
            }
            else 
            {
                resolve(`base actualizada...`);
            }
            // throw err;
        // console.log('El archivo ha sido creado !');
        });
    });

}

const getListado = () => {
    cargarData();
    return listadoPorHacer;
}

const setActualizar = (descripcion, completado = true ) => {
    cargarData();
    
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) 
    {
        listadoPorHacer[index].completado = completado;
        
        guardarData()
        .then ( archivo => console.log('Archivo ', archivo, 'creado '))
        .catch( err     => console.log(err));

        return true;

    }
    else
    {
        return false;
    }
}

const setBorrar = (descripcion) => {
    
    cargarData();

    let encontrado = false;

    const listadoPorHacerNuevo = listadoPorHacer.filter(tarea => {
        if (tarea.descripcion !== descripcion ) 
        {
            encontrado = true;
        }
        return (tarea.descripcion !== descripcion ) 
    })

    // console.log("listado Nuevo", listadoPorHacerNuevo);
    listadoPorHacer = [...listadoPorHacerNuevo];

    guardarData()
    .then ( archivo => console.log('Archivo ', archivo, 'creado '))
    .catch( err     => console.log(err));

    return encontrado;
}

const cargarData = () => {
    
    try 
    {
        listadoPorHacer = require('../db/data.json');
        
    } 
    catch (error) 
    {
        listadoPorHacer = [];   
    }
    // console.log(listadoPorHacer);
}

const crear = (descripcion) => {

    cargarData();

    let porHacer = {
        descripcion: descripcion 
       ,completado: false
       
    };


    listadoPorHacer.push(porHacer);

    guardarData()
        .then ( archivo => console.log('Archivo ', archivo, 'creado '))
        .catch( err     => console.log(err));

    return porHacer;
}

module.exports = {
     crear
    ,guardarData
    ,getListado
    ,cargarData
    ,setActualizar
    ,setBorrar
}