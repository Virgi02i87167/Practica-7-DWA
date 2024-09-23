// Interar propiedades de un objeto
const producto = {
    nombre: "Laptop",
    precio: 800,
    disponible: true
};

// Uso del bucle para iterar sobre las propiedades del objeto
for (let propiedad in producto) {
    console.log(`${producto[propiedad]}`)
}