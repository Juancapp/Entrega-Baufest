var arreglo = [5, 3, 0, 2, 4, 4, 0, 0, 2, 3, 6, 0, -1];

var promedio = Calcular(arreglo);
function Calcular(arreglo) {
    var i = 0, suma = 0, ArrayLen = arreglo.length;
    while (i < ArrayLen) {
        suma = suma + arreglo[i++];
}
    return suma / ArrayLen;
}

// Función mínimo
function min(arreglo){
    var al = arreglo.length;
    minimo = arreglo[al-1];
    while (al--){
        if(arreglo[al] < minimo){
            minimo = arreglo[al]
        }
    }
    return minimo;
};
var mi = min(arreglo);

// Función máximo
function max(arreglo){
    var al = arreglo.length;
    maximo = arreglo[al-1];
    while (al--){
        if(arreglo[al] > maximo){
            maximo = arreglo[al]
        }
    }
            return maximo;
};
var ma = max(arreglo);

// Retornar promedio, mínimo y máximo

console.log(promedio);
console.log(mi);
console.log(ma);


