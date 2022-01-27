/**
 * всего будет слайдер из 2-х картинок, 
 * при нажатии на popup__button--next будем показывать pic-1.jpg
 * при нажатии на popup__button--prev будем показывать yup.jpg
 * Картинки будем показывать в элементе img с классом popup__image
 */

/**
 * 1 - следить за всеми кликами по блоку с классом content
 * 2 - если пользватель кликнул по картинке (тег IMG), то показать darklayer с попапом ()
 * 3 - картинке, которая находится внутри попапа назначить в качестве атрибута src адрес той картинки, по которой кликнул пользователь
 * 4 - если пользователь кликнул по блоку с классом  darklayer - скрыть попап (добавим ему)
 */

// находим HTML-элементы в разметке, с которыми мы будем работать
const buttonNext = document.querySelector('.popup__button--next');
const buttonPrev = document.querySelector('.popup__button--prev');
const img = document.querySelector('.popup__image');
const darklayer = document.querySelector('.darklayer');
const content = document.querySelector('.content');

// здесь мы определяем функции, которые будут срабатывать при событии клика:
// эта - для кликов по контейнеру с классом content

function onContentClick(event) {
    // event - это переменная, в которой содержится вся информация о клике (от класса элемента, по которому кликнули, до координат курсора мыши)
    console.log(event);
    // target - это свойство в объекте event, к вотором есть вся информация об HTML-элементе, по которому кликнули
    console.log(event.target);
    // т.к. мы считаем, что пользователь может кликнуть только по картинке (тег img), то со спокойной душой используем свойство src.
    // тут надо понимать, что при клике на div или span никакого src у элемента не будет
    console.log(event.target.src);
    img.src = event.target.src;
    darklayer.classList.remove('visually-hidden');
}

// эта - для кликов по контейнеру с классом darklayer
function onDarklayerClick(event) {
    darklayer.classList.add('visually-hidden');
}

// здесь мы даем команду следить за кликами пользователя
content.addEventListener('click', onContentClick);
darklayer.addEventListener('click', onDarklayerClick);

