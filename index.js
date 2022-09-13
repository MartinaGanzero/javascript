const pizzas = [
    {
        nombre: "margarita",
        id: 1,
        ingredientes: ['salsa de tomate', 'mozzarella', 'aceitunas', 'albahaca'],
        precio: 500,
    },

    {
        nombre: "napolitana",
        id: 2,
        ingredientes: ['salsa de tomate', 'mozzarella', 'tomate', 'ajo'],
        precio: 600,
    },

    {
        nombre: "cuatro quesos",
        id: 3,
        ingredientes: ['queso parmesano', 'queso provolone', 'mozzarella', 'queso azul', 'aceite de oliva'],
        precio: 800,
    },

    {
        nombre: "jamon crudo y rucula",
        id: 4,
        ingredientes: ['salsa de tomate', 'queso parmesano', 'jamón crudo', 'rúcula', 'aceitunas negras'],
        precio: 850,
    },

    {
        nombre: "pizza de la casa",
        id: 5,
        ingredientes: ['mozzarella', 'queso cheddar', 'panceta', 'huevo', 'verdeo'],
        precio: 750,
    },

    {
        nombre: "fugazzeta",
        id: 6,
        ingredientes: ['mozzarella', 'cebolla', 'orégano', 'aceitunas'],
        precio: 700,
    },

    {
        nombre: "Pepperoni",
        id: 7,
        ingredientes: ['mozzarella', 'salsa de tomate', 'pepperoni'],
        precio: 700,
    },
];

console.log(pizzas.length)


// a)Las pizzas que tengan un id impar.

// const idImpares = pizzas.filter(pizzas => pizzas.id % 2 == 1)
// idImpares.forEach((pizzas) => {
//     console.log(`La pizza ${pizzas.nombre} es de id impar`)
// });






// b) ¿Hay alguna pizza que valga menos de $600?

// const tieneUnValorMenor = (pizzas, cantidad) => pizzas.precio < cantidad;

// const salgaMenosDe = (precio) => {
//     pizzas.some( pizzas => tieneUnValorMenor(pizzas, precio))
//     console.log(`Si hay pizzas que valgan menos de $${precio}`)
// }
// salgaMenosDe(600);





// c) El nombre de cada pizza con su respectivo precio.

// const pizzasConSuPrecio = pizzas.map( (pizzas) => {
//       return { ...pizzas, precio: pizzas.precio }
//     } )
//     pizzasConSuPrecio.forEach((pizzas) => {
//       console.log(`La pizza ${pizzas.nombre} tiene un valor de $${pizzas.precio}`)
//     })




//d) Todos los ingredientes de cada pizza 

// const  pizzaIngredientes= [];
// pizzas.forEach( ingredientes => console.log(ingredientes))
// console.log(pizzaIngredientes)