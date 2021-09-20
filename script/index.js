/**
 * всего будет слайдер из 2-х картинок, 
 * при нажатии на popup__button--next будем показывать pic-1.jpg
 * при нажатии на popup__button--prev будем показывать yup.jpg
 * Картинки будем показывать в элементе img с классом popup__image
 */


const buttonNext = document.querySelector('.popup__button--next');
const buttonPrev = document.querySelector('.popup__button--prev');
const img = document.querySelector('.popup__image');

console.log(buttonNext);
console.log(buttonPrev);
console.log(img);

// это должно сработать при клике на левую кнопку
img.src = './images/yup.jpg';

// а это - на правую
img.src = './images/pic-2.jpg';
