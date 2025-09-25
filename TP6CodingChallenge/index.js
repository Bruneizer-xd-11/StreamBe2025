// Creá una función que evalúe el rendimiento de un alumno en un
// examen.
// function Evaluar(nota)
// {
//     if (nota >= 0 && nota <= 2)
//     {
//         return console.log("Muy mal")
//     }
//     else if(nota > 2 && nota < 5)
//     {
//         return console.log("Mal")
//     }
//     else if(nota >= 5 && nota < 6)
//     {
//         return console.log("Tan cera pero tan lejos")
//     }
//     else if (nota >= 6 && nota <= 8)
//     {
//         return console.log("Bien")
//     }
//       else if (nota > 8 && nota <= 10)
//     {
//         return console.log("Muy Bien")
//     }
// }
// console.log(Evaluar(0))
// console.log(Evaluar(1))
// console.log(Evaluar(2))
// console.log(Evaluar(3))
// console.log(Evaluar(4))
// console.log(Evaluar(5))
// console.log(Evaluar(6))
// console.log(Evaluar(7))
// console.log(Evaluar(8))
// console.log(Evaluar(9))
// console.log(Evaluar(10))
// // ------------------------
// ---------------------------
// Creá una función que reciba como parámetros dos números y una
// palabra.
// Si hay un número más grande que otro retorna el más alto. En
// caso de que sean iguales retorna la inicial y la última letra del
// tercer parámetro.
// function compararNumeros(num1, num2, palabra) {
//     if (num1 > num2) {
//         return num1;
//     } else if (num2 > num1) {
//         return num2;
//     } else {
//         return palabra.charAt(0) + palabra.charAt(palabra.length - 1);
//     }
// }
// console.log(compararNumeros(50, 40, "Hola mundo"));  
// --------------------------------------------
// --------------------------------------------
// Dado un arreglo de objetos con frutas y verduras:
// let frutasYVerduras =
// [{fruta:"banana"},{verdura:"apio"},{fruta:"manzana"},{fruta:"frutilla"},{verdura:"zanahori
// a"},{fruta:"kiwi"},{fruta:"sandia"},{fruta:"melon"},{verdura:"repollo"},{fruta:"mango"}]
// Creá una función que filtre por las frutas y retorne el siguiente valor:
// {frutas:['banana', 'manzana', 'frutilla', 'kiwi', 'sandia', 'melon', 'mango']}              
// function filtrarFrutas(arr) {
//     let frutas = arr.filter(item => item.fruta).map(item => item.fruta);
//     return { frutas: frutas };
// }
// let frutasYVerduras = [
//     { fruta: "banana" },
//     { verdura: "apio" },
//     { fruta: "manzana" },
//     { fruta: "frutilla" },
//     { verdura: "zanahoria" },
//     { fruta: "kiwi" },
//     { fruta: "sandia" },
//     { fruta: "melon" },
//     { verdura: "repollo" },
//     { fruta: "mango" }
// ];
// console.log(filtrarFrutas(frutasYVerduras)); // { frutas: ['banana', 'manzana'  , 'frutilla', 'kiwi', 'sandia', 'melon', 'mango'] }
// --------------------------------------------
// --------------------------------------------
// Creá una función dispenserGaseosas que tome dos arreglos como parámetros. A
// partir de estos, se pide crear un objeto gaseosasEnStock.
// Mediante este objeto consultaremos si la gaseosa que quiere el cliente está en
// stock.
// function dispenserGaseosas(gaseosasDisponibles, gaseosasEnStock) {
//     let stock = {};
    
//     // Llenar el objeto stock con las gaseosas disponibles
//     for (let i = 0; i < gaseosasDisponibles.length; i++) {
//         stock[gaseosasDisponibles[i]] = true;
//     }
    
//     // Función para consultar si una gaseosa está en stock
//     return function consultarGaseosa(gaseosa) {
//         if (stock[gaseosa]) {
//             return `${gaseosa} está en stock.`;
//         } else {
//             return `${gaseosa} no está en stock.`;
//         }
//     };
// }
// // Ejemplo de uso
// let gaseosasDisponibles = ["Coca-Cola", "Sprite", "Fanta"];
// let gaseosasEnStock = ["Coca-Cola", "Sprite", "Fanta", "Pepsi"];
// let consultarGaseosa = dispenserGaseosas(gaseosasDisponibles, gaseosasEnStock);
// console.log(consultarGaseosa("Coca-Cola")); // "Coca-Cola está en stock."
// console.log(consultarGaseosa("Pepsi")); // "Pepsi no está en stock."
// --------------------------------------------
// --------------------------------------------
// Escribí una función que recibe un arreglo de objetos como parámetro y
// que tiene la propiedad nombre y edad.
// Esta función debe devolver el mismo arreglo de objetos con una
// propiedad adicional que indica el año en el que nació.
// Test: [{nombre: "Juan", edad:19},{nombre:"Mario", edad: 22}]
// function agregarAñoNacimiento(arr) {
//     const añoActual = new Date().getFullYear();
//     return arr.map(obj => {
//         return { ...obj, añoNacimiento: añoActual - obj.edad };
//     });
// }
// console.log(agregarAñoNacimiento([{ nombre: "Juan", edad: 19 }, { nombre: "Mario", edad: 22 }]));
// [{nombre: "Juan", edad:19, añoNacimiento: 2005},{nombre:"Mario", edad: 22, añoNacimiento: 2002}]

