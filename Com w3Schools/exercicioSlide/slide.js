'use strict';

const images = [
    { 'id': '1', 'url':'imagens/chrono.jpg' },
    { 'id': '2', 'url':'imagens/inuyasha.jpg' },
    { 'id': '3', 'url':'imagens/tenchi.jpg' },
    { 'id': '4', 'url':'imagens/tenjhotenge.jpg' },
    { 'id': '5', 'url':'imagens/yuyuhakusho.jpg' },
    { 'id': '6', 'url':'imagens/ippo.png' },
]

const container = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item' data-number=${image.id}>
                <img src='${image.url}'
            </div>
        `
    })
}


loadImages(images, container);