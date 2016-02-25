//Examen 1
function crearPersona(persona){
    return function(estadoVaso){
        if(estadoVaso===false){
            console.log(persona+' Se sorprendio al ver que no quedaba contenido');
        } else {
            console.log(persona+' Se Bebio el contenido');
        }
    }
}
//prueba examen 1
console.log('prueba examen 1');
var persona1 = crearPersona('jose');
persona1(false); //sin contenido
persona1(true); //con contenido
console.log('-------------');
//Examen 2
// 1.
Array.prototype.addStringEnd = function(word){
    var index;
    for ( index=0 ; index < this.length ; index++ ){
        this[index] = this[index]+word;
    }
}
//prueba 1
console.log('Prueba examen 2 [1]')
var array = [1,2,3,4,5];
array.addStringEnd('hio');
console.log(array);
console.log('-----------')

//2.
Array.prototype.getElement = function(position){
    var index;
    var answer;
    var index2 = 0;
    for ( index=0 ; index < this.length ; index++ ){
        if(index!==position){
            this[index2] = this[index];
            index2++;
        } else{
            answer = this[index];
        }
    }
    delete array[index-1];
    return answer;
}
//prueba 2
console.log('Prueba examen 2 [2] (no se puede, al menos no se como se realizaria)')
var array = [1,2,3,4,5];
var resultado = array.getElement(2);
console.log(resultado);
console.log(array);
console.log('-----------')

//3.
function transformar (variable){
    var respuesta=[];
    var index =0;
    if(typeof variable === 'number'){
        while(variable > 0){
            respuesta[index]= Math.round(variable%10);
            variable = Math.round(variable/10);
            index++;
        }
    } else {
        if(typeof variable === 'string'){
            for (index=0;index<variable.length;index++){
                respuesta[index]=variable[index];
            }
        }
    }
    return respuesta;
}

Array.prototype.unir = function(variable){
    var index;
    var length =this.length;
    if(variable.constructor!=Array ){
        variable = transformar(variable);
    }
    for ( index= length ; index < length+variable.length ; index++ ){
        this[index] = variable[index-length];
    }
}
//prueba 3
console.log('Prueba examen 2 [3] ')
var array = [1,2,3,4,5];
var array2 = [1,2,3]
array.unir(array2);
console.log(array);
array.unir('hola');
console.log(array);
array.unir(123);
console.log(array);
console.log('-----------')


//4.
Array.prototype.ejecutarFuncion = function (func){
    return func(this);
}
//prueba 4
console.log('Prueba examen 2 [4]');
var array = [1,2,3,4,5];
function contarPares(array){
    var index = 0;
    var resultado=0;
    for ( index=0 ; index < array.length ; index++ ){
        if(array[index]%2 ===0){
            resultado++;
        }
    }
    return resultado;
}
var resultado = array.ejecutarFuncion(contarPares);
console.log(resultado);
console.log('-----------');
