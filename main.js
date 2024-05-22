var imagenes = ['img/halo3.jpg', 'img/halo4.jpg', 'img/haloWars.jpg', 'img/infinite.jpg', 'img/spiritFire.jpg']
    cont = 0;


function carrusel (contenedor){
    contenedor.addEventListener('click', e =>{
        let atras = contenedor.querySelector('.atras_btn'),
        adelante = contenedor.querySelector('.adelante_btn'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt.classList.contains('atras_btn')){
            cont--;
            if(cont < 0){
                cont = imagenes.length - 1;
            }
            img.setAttribute('src', imagenes[cont]);
        }else if(tgt.classList.contains('adelante_btn')){
            cont++;
            if(cont > imagenes.length - 1){
                cont = 0;
            }
            img.setAttribute('src', imagenes[cont]);
        }
    });
}  



document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
});


document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('backgroundMusic');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pausar música';
        } else {
            audio.pause();
            playButton.textContent = 'Reproducir música';
        }
    });
});