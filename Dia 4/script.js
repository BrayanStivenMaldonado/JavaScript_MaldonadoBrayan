var Datos = [
    {
        "InformacionPersonal": {
            "Nombre": "Juan Pérez",
            "Edad": 30,
            "Direccion": {
                "Calle": "Calle Principal",
                "Numero": 123,
                "Ciudad": "Ciudad Ejemplo"
            },
            "Contacto": {
                "Correo": "juan.perez@example.com",
                "Telefono": "+123456789"
            }
        },
        "HistorialEducativo": [
            {
                "Nivel": "Secundaria",
                "Institucion": "Instituto Secundario",
                "AnioInicio": 2000,
                "AnioFin": 2005
            },
            {
                "Nivel": "Universidad",
                "Institucion": "Universidad Ejemplar",
                "Titulo": "Licenciatura en Ciencias",
                "AnioInicio": 2006,
                "AnioFin": 2010
            }
        ],
        "ExperienciaLaboral": [
            {
                "Puesto": "Desarrollador de Software",
                "Empresa": "Tech Solutions",
                "Periodo": "2010-2015",
                "Responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "Puesto": "Gerente de Proyectos",
                "Empresa": "Proyectos Avanzados",
                "Periodo": "2016-actualidad",
                "Responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    },
    {
        "InformacionPersonal": {
            "Nombre": "Pepito Gomez",
            "Edad": 30,
            "Direccion": {
                "Calle": "Calle Central",
                "Numero": 456,
                "Ciudad": "Ciudad Ejemplo 2"
            },
            "Contacto": {
                "Correo": "pepito.gomez@example.com",
                "Telefono": "+987654321"
            }
        },
        "HistorialEducativo": [
            {
                "Nivel": "Bachiller",
                "Institucion": "Instituto Superior",
                "AnioInicio": 1999,
                "AnioFin": 2004
            },
            {
                "Nivel": "Universidad",
                "Institucion": "Universidad Lider",
                "Titulo": "Licenciatura en Matematicas",
                "AnioInicio": 2005,
                "AnioFin": 2009
            }
        ],
        "ExperienciaLaboral": [
            {
                "Puesto": "Desarrollador de Software",
                "Empresa": "Tech Solutions CORP",
                "Periodo": "2011-2016",
                "Responsabilidades": [
                    "Desarrollo de aplicaciones web",
                    "Mantenimiento de bases de datos"
                ]
            },
            {
                "Puesto": "Gerente de Proyectos",
                "Empresa": "Proyectos Avanzados",
                "Periodo": "2014-actualidad",
                "Responsabilidades": [
                    "Planificación y supervisión de proyectos",
                    "Coordinación de equipos"
                ]
            }
        ]
    }
]


//Function to view the person's information 
function MostrarDatos(n){
    console.log("Read\n\nDatos De La Persona")
    console.log("Nombre:",Datos[n]["InformacionPersonal"]["Nombre"])
    console.log("Edad:",Datos[n]["InformacionPersonal"]["Edad"])
    console.log("Calle:",Datos[n]["InformacionPersonal"]["Direccion"]["Calle"])
    console.log("Numero:",Datos[n]["InformacionPersonal"]["Direccion"]["Numero"])
    console.log("Ciudad:",Datos[n]["InformacionPersonal"]["Direccion"]["Ciudad"])
    console.log("Correo:",Datos[n]["InformacionPersonal"]["Contacto"]["Correo"])
    console.log("Telefono:",Datos[n]["InformacionPersonal"]["Contacto"]["Telefono"])
}
console.log("   CRUD    \n\n1. Create\n2. Read\n3. Update\n4. Delete \n5. Stop Program")
var eleccion = prompt("Which section would you like to access?")

if(eleccion==1){
    console.log("Create")

    let NuevoNombre = prompt("Nombre de la persona")
    let NuevaeEdad = prompt("Edad de la persona")
    let NuevaCalle = prompt("Calle de la persona")
    let NuevoNumero = prompt("Numero de la persona")
    let NuevaCiudad = prompt("Ciudad de la persona")
    let NuevoContacto = prompt("Correo de la persona")
    let NuevoTelefono = prompt("Telefono de la persona")
    let NuevoNivel = prompt("Nivel educativo de la persona")
    let NuevaInstitucion = prompt("Institucion en la que estudió")
    let NuevoAnio = prompt("Anio de inicio")
    let NuevoAnioFinal = prompt ("Anio de fin")
    let NuevoPuesto = prompt("Puesto en el que trabajo")
    let NuevaEmpresa = prompt("Empresa en la que trabajo")
    let NuevoPeriodo = prompt("Periodo en el que trabajo")
    let NuevasResponsabilidades = prompt("Responsabilidades dentro de la empresa (1)")
    let NuevasResponsabilidades2 = prompt("Responsabilidades dentro de la empresa (2)")

    let DatosNuevos = {
        "InformacionPersonal": {
            "Nombre": NuevoNombre,
            "Edad": NuevaeEdad,
            "Direccion": {
                "Calle": NuevaCalle,
                "Numero": NuevoNumero,
                "Ciudad": NuevaCiudad
            },
            "Contacto": {
                "Correo": NuevoContacto,
                "Telefono": NuevoTelefono
            }
        },
        "HistorialEducativo": [
            {
                "Nivel": NuevoNivel,
                "Institucion": NuevaInstitucion,
                "AnioInicio": NuevoAnio,
                "AnioFin": NuevoAnioFinal
            }
        ],
        "ExperienciaLaboral": [
            {
                "Puesto": NuevoPuesto,
                "Empresa": NuevaEmpresa,
                "Periodo": NuevoPeriodo,
                "Responsabilidades": [
                    NuevasResponsabilidades,
                    NuevasResponsabilidades2
                ]
            }
        ]
    }
    console.log(DatosNuevos)
    Datos.push(DatosNuevos)
    console.log(Datos)

}else if(eleccion==2){
    for (i=0;i<Datos.length;i++){
        console.log(i+1,Datos[i]["InformacionPersonal"]["Nombre"])
    }
    let input = prompt("which person's data do you want to see?")
    MostrarDatos(input-1)

}else if(eleccion==3){
    console.log("Update")
    for (i=0;i<Datos.length; i++){
        console.log(i+1,Datos[i]["InformacionPersonal"]["Nombre"])
    }
    let EleccionPersona = prompt("which user do you want to edit?")
    MostrarDatos(EleccionPersona-1)

    let Cambiar = prompt("What type of data do you want to change?\nNombre\nEdad\nDireccion\nContacto")
    if (Cambiar == "Nombre"){
        let NuevoNombre = prompt("Ingrese el nuevo nombre")
        Datos[EleccionPersona-1]["InformacionPersonal"]["Nombre"] = NuevoNombre
    }else if (Cambiar  == "Edad"){
        let NuevaEdad = prompt("Ingrese la nueva Edad")
        Datos[EleccionPersona-1]["InformacionPersonal"]["Nombre"] = NuevaEdad
    }else if (Cambiar == "Direccion"){
        let CambiarDireccion = prompt("Qué dato de la direccion desea cambiar?\nCalle\nNumero\nCiudad") 
        let NuevoValor = prompt("Ingrese la nueva",CambiarDireccion)
        Datos[EleccionPersona-1]["InformacionPersonal"]["Direccion"][CambiarDireccion] = NuevoValor
    }else if (Cambiar == "Contacto"){
        let CambiarContacto = prompt("Qué datos de el contacto desea editar?\nCorreo\nTelefono")
        let NewValue = prompt("Ingrese el nuevo",CambiarContacto)
        Datos[EleccionPersona-1]["InformacionPersonal"]["Contacto"][CambiarContacto] = NewValue
    }else{
        console.log("Esta no es una opcion valida :(")
    }

    console.log(Datos)

}else if(eleccion==4){
    console.log("Delete")
    for (i=0;i<Datos.length;i++){
        console.log(i+1,Datos[i]["InformacionPersonal"]["Nombre"])
    }

    let Eliminar = prompt("A qué usuario desea eliminar?") 

    Datos.splice(Eliminar-1, 1)

    console.log(Datos)
    for (i=0;i<Datos.length;i++){
        console.log(i+1,Datos[i]["InformacionPersonal"]["Nombre"])
    }


}else if(eleccion==5){
    console.log("Stopping Program, good bye")
    booleano = false
}else{
    console.log("This isn't a valid opcion")
}

// Desarrollado por Brayan Maldonado - T.I 1.090.404.470 - Estudiante de Campuslands