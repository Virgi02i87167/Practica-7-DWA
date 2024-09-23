// Objeto que contiene propiedades con otros objetos
const estudiante = {
    nombre: 'Virgilio',
    edad: 23,
    direccion: {
        calle: 'Colonia Jucuapa #2, calle principal',
        ciudad: 'San Miguel'
    },
    materias: ['Matematicas', 'Programacion', 'Bases de Datos']
};

// Acceso d la propiedades derivadas
console.log(estudiante.direccion.ciudad)
console.log(estudiante.materias[1])