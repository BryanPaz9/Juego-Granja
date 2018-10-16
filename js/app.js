var canvas = document.getElementById('fondo');
var lapiz = canvas.getContext('2d');

var fondo = {
    url: './imagenes/tile.png',
    imagen: Image    

};

var vaca ={
    url: './imagenes/vaca.png',
    imagen: Image
}

var cerdo = {
    url: './imagenes/cerdo.png',
    imagen: Image

}

fondo.imagen = new Image();
vaca.imagen = new Image();  
cerdo.imagen = new Image();
fondo.imagen.src = fondo.url;
vaca.imagen.src = vaca.url;
cerdo.imagen.src = cerdo.url;

fondo.imagen.addEventListener("load",function(){
    // lapiz.drawImage(fondo.imagen,0,0);
    dibujar();
});
vaca.imagen.addEventListener("load",function(){
    dibujar();
    // lapiz.drawImage(vaca.imagen,150,100);
})
cerdo.imagen.addEventListener("load",function(){
    dibujar();

})

function dibujar(){
lapiz.drawImage(fondo.imagen,0,0);
lapiz.drawImage(vaca.imagen,150,100);
lapiz.drawImage(cerdo.imagen,300,200);
}

