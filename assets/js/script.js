
//muestra los métodos que tienen los arrays
var arreglo = []
console.log(arreglo);


//método push, agrega elementos al array
var amigos = ["Erick", "Cristian", "Max", "Claudia"];
amigos.push("Gary", "Arturo", "Alexis");
console.log(amigos);



//método pop, elimina último elemento de un array.
var amigos = ["Erick", "Cristian", "Max", "Claudia"];
amigos.pop();
console.log(amigos);



//método shift, elimina el primer elemento del array
var amigos = ["Erick", "Cristian", "Max", "Claudia"];
amigos.shift();
console.log(amigos);


/*
método split, divide una cadena de texto string en un arreglo,
es como si transformara la cadena de string en elementos de un arreglo,
indicando el separador con un (',')*/
var cliente = 'Juan Carlos, 29, jcarlos@gmail.com'; //toma el string 'juan carlos,...
var arregloCliente = cliente.split(', ');  //y le indica que separe en arreglos
console.log(arregloCliente);        //tomando como referencia de separador la coma



//método join, imprime datos de un array, con formato definido en join, 
var amigos = ["Erick", "Cristian", "Max", "Claudia"];//sacándolos del array
console.log(amigos.join("-")); //ej: Erick-Cristian-Max-Claudia


/*
método sort, ordena de forma alfabética para string y para otros
elementos ordena según valor unicode*/
var amigos = ["Erick", "Cristian", "Max", "Claudia"];
console.log(amigos.sort()); //ej:["Claudia", "Cristian", "Erick", "Max"]
var numeros = [1, 5, 20, 23];
console.log(numeros.sort()); //ej: [1, 20, 23, 5] ojo. revisar orden unicode!



//método reverse, invierte el orden de los elementos del array
var muchachos = ["Juan", "Lucas", "Pedro", "Marcos"];
console.log(muchachos.reverse()); //ej:[ "Marcos", "Pedro", "Lucas", "Juan" ]

/*
método forEach, es como recorrer un arrray con un for, declarar variables
y asignar indices, pero en este método no se requiere, recorre cada elemento
y realiza una acción con el elemento que llamemos*/
var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 22},
    {nombre: 'Karla', edad: 27},
    ];
  
    clientes.forEach(function(cliente) {
        console.log(cliente.nombre);
        });
        
    /*ej:Juan 
         Carlos
         Karla 
Se pueden agregar más parámetros a la función.

** forEach hace lo mismo que haría en este caso esto:
        for (i = 0; i < clientes.length; i++) {
        console.log(clientes[i].nombre); 
            
    }*/

/*
método map, este método recorre los objetos del array permitiendo modificarlos
sin la necesidad de usar una iteración con sus index, en el ejemplo siguiente
se muestra lo que haría una persona sin usar el map y luego el mismo resultado 
con map.*/
     //Ej. SIN map

    var clientes = [
        {nombre: 'Juan', edad: 28},
        {nombre: 'Carlos', edad: 17},
        {nombre: 'Karla', edad: 27},
        ];
        for (i = 0; i < clientes.length; i++) {
            if (clientes[i].edad>=18){
            clientes[i].adulto=true;
        }
        else{
            clientes[i].adulto=false;

        }
    }
            console.log(clientes);  

    //Ejemplo CON método map

    var clientes = [
        {nombre: 'Juan', edad: 28},
        {nombre: 'Carlos', edad: 17},
        {nombre: 'Karla', edad: 27},
        ];
        clientes = clientes.map(function(cliente) {
        if (cliente.edad >= 18) {
        cliente.adulto = true;
        } else {
        cliente.adulto = false;
        }
        return cliente;
        });
        console.log(clientes);


/*
método reduce, sirve para reducir elementos de un array en un valor único
sirve para sumar elementos de un array
ej:*/

var deudas = [10000, 5000, 50000, 35000];
var sumatoriaDeudas = deudas.reduce(function(contador, deuda){
return contador + deuda;
});
console.log(sumatoriaDeudas); //El resultado sería:100000
/*El contador representa el resultado de lo ejecutado dentro de
la función, mientras que deuda representa el elemento actual en
el cual se está iterando.*/

//para usar reduce sobre objetos:
var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
    ];
    var nombres = clientes.reduce(function(acumulador, cliente){
    return acumulador + ' | ' + cliente.nombre;
    }, '');
    console.log(nombres);

// el resultado sería: | Juan | Carlos | Karla


//método filter, permite realizar un filtrado de objetos o elementos
//que se encuentran al interior de un arreglo y devolver el resultado
//en forma de arreglo mediante una iteración ej:

var clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
    ];
    var adultos = clientes.filter(function(cliente){
    return cliente.edad >= 18
    });
    console.log(adultos); /*el resultado es
     {nombre: "Juan", edad: 28}
     {nombre: "Karla", edad: 27}*/
    

//método find, obtiene objeto que cumpla condición especificada, retorna unicamente
//un objeto que cumpla con la condición, a diferencia del filter.
//Ej:

var productos = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},
    ];
    var kapo = productos.find(function(producto){
    return producto.nombre == 'kapo'
    });
    console.log(kapo); //El resultado es:{nombre: "kapo", precio: 190}


//método findIndex, obtiene el índice del objeto que cumpla condición.
//Ej:
var productos = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},
    ];
    var ramitasIndice = productos.findIndex(function(producto){
    return producto.nombre == 'ramitas'
    });
    console.log(ramitasIndice); //El resultado es 2
    


/*
método some, nos permite verificar si algún objeto o elemento dentro
 de un array cumple con alguna condición que nosotros queramos verificar,
 es decir, revisar si un arreglo contiene o no un valor.
 Ej: 
 */
var autos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
    ];
    var algunDiesel = autos.some(function(auto){
    return auto.combustible == 'Diesel'
    });
    console.log(algunDiesel); //SE UTILIZA PARA VALIDACIONES BOOLEANAS


/*
método concat,podemos fusionar los elementos de dos o más arrays dentro de un
solo resultado. Puede ser muy útil para unir elementos que pertenezcan a 
una misma clasificación.
 Ej: 
 */

var autosCompactos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
    ];
    var autosDeportivos = [
    {marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
    {marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
    {marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'},
    ];
    var autos = autosCompactos.concat(autosDeportivos);
    console.log(autos);
/*El resultado sería el siguiente
0: {marca: "Toyota", modelo: "Corolla", combustible: "Gasolina"}
1: {marca: "Mazda", modelo: "3", combustible: "Gasolina"}
2: {marca: "Honda", modelo: "Civic", combustible: "Gasolina"}
3: {marca: "Bmw", modelo: "116d", combustible: "Diesel"}
4: {marca: "Opel", modelo: "Astra OPC", combustible: "Gasolina"}
5: {marca: "Renault", modelo: "Megane RS", combustible: "Gasolina"}
6: {marca: "Mitsubishi", modelo: "Lancer Evo", combustible: "Gasolina"}

Concatena ambos arrays en uno cuyo nombre es autos*/    