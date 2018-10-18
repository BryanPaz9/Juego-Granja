document.addEventListener("keydown",movimiento);
var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');
var x= random(0,5)*80;
var y = random(0,5)*80;
// var cont =0;
const DIMENSION = 80;
var randomx = random(0,5);
var randomy = random(0,5);
var randomy1 = random(0,5);
var randomx1 = random(0,5);
// var sano1 = random (0,cont);
randomC = random(1,6);
randomV = random(1,6);
randomSano = random(1,3);
var matriz = new Array(6);  
var fondo = {
    url: './imagenes/tile.png',
    imagen: Image,    
    cargaOk: false
};

var vaca ={
    url: './imagenes/vaca.png',
    imagen: Image,
    cargaOk: false
};

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image,
    cargaOk: false
};

var cuchillo = {
    url: './imagenes/Cuchillo.png',
    imagen: Image,
    cargaOk: false

};

fondo.imagen = new Image();
vaca.imagen = new Image();  
cerdo.imagen = new Image();
cuchillo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;
cuchillo.imagen.src = cuchillo.url;

fondo.imagen.addEventListener("load",function(){
    fondo.cargaOk = true;
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
    vaca.cargaOk = true;
     dibujar();
});
cerdo.imagen.addEventListener("load",function(){
    cerdo.cargaOk = true;
     dibujar();
});
cuchillo.imagen.addEventListener("load",function(){
    cuchillo.cargaOk = true;
    dibujar();
});
iniciarMatriz();
inicializarCerdo();
inicializarVacas();
dibujar();
var tecla ={
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    ENTER: 13

}

function dibujar(){
    if(fondo.cargaOk){
        lapiz.drawImage(fondo.imagen,0,0);
    }

    dibujarMatriz();
     if(cuchillo.cargaOk){
        lapiz.drawImage(cuchillo.imagen,x,y);
    }
    
}
function movimiento(evento){
    
    // console.log(evento);
    switch(evento.keyCode){
        case tecla.LEFT:
            // alert("Izquierda");
            if(x!=0){
            x-= DIMENSION;
            dibujar();
            }
            break;
        case tecla.UP:
        if(y !=0){
            y-= DIMENSION;
            dibujar();
        }
            break;
        case tecla.RIGHT:
        if (x !=400){
            x+= DIMENSION;
            dibujar();
        }
            break;
        case tecla.DOWN:
        if(y !=400){
            y+= DIMENSION;
            dibujar();
        }
            break;
        case tecla.ENTER:   
        // console.log(matriz);
        // alert((x/DIMENSION)+" "+(y/DIMENSION))   ;
        // alert(matriz[1]);
        // if (cont ==1 || cont ==2 || cont==3){
        //     alert(matriz.length);
        // }
        alert(matriz);
        if(matriz[x][y]== 'v'){
            alert('vaca');
        }
            else if(matriz[x][y]){
                alert('cerdo');
            }
        }
    }

function random(minimo, maximo){
    return Math.floor(Math.random()*(maximo -minimo+1 ))+minimo;

}

function iniciarMatriz(){
    for (var i = 0; i <matriz.length; i++){
        matriz[i] = new Array(6);
        for(var j = 0; j<matriz.length; j++){
            matriz[i][j]= 'x';
        }
    }
}

function inicializarVacas(){
    var numero = random(0,5);
    var sano = random(0,numero);
    var cont = 0;
    for(var i = 0; i<= numero;i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna] == 'x'){
            matriz[fila][columna] ='v';
        }
    }
}

function inicializarCerdo(){
    var numero = random(0,5);
    var sano = random(0,sano);
    for(var i = 0; i<= numero; i++){
        var fila = random(0,5);
        var columna = random(0,5);
        if(matriz[fila][columna]== 'x'){
            matriz[fila][columna] = 'c'; 
        }
    }
}

function dibujarMatriz(){
    for(var i = 0; i<matriz.length; i++){
        for(var j =0; j<matriz.length;j++){
            if(matriz[i][j]=='v'){
                lapiz.drawImage(vaca.imagen ,i*DIMENSION, j*DIMENSION);
            }else if(matriz[i][j]=='c'){
                lapiz.drawImage(cerdo.imagen,i*DIMENSION,j*DIMENSION);
            }
        }
    }
}
function animales(){
    var cont = 0;
    for(var i =0; i<matriz.length; i++){
        for(var j = 0; j<matriz.length;j++){
            if(matriz[i][j]== 'v'){
                alert('vaca');
            }else if(matriz[i][j]== 'c'){
                alert('cerdo');
            }
        }
    }
}