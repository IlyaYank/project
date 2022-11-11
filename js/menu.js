const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_button');
const navBtnimg = document.querySelector('#nav_btn_img');
const anchors = document.querySelectorAll('a[href^="#"]');

navBtn.onclick = () => {
    if (nav.classList.toggle('nav_open')) {
        navBtnimg.src="./img/header/NAV_CLOSE.svg";
    }
    else{
        navBtnimg.src="./img/header/NAV.svg";
    }
}
// Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Предотвратить стандартное поведение ссылок
// Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href')
            ? anchor.getAttribute('href')
            : 'body';
// Плавная прокрутка до элемента с id = href у ссылки
        document.querySelector(goto).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        /*В открытом меню удаляет класс open и закрываю меню и плавно переносит в определенную секцию*/
        if (nav.classList.contains('nav_open')) {
            nav.classList.remove('nav_open');
            navBtnimg.src="./img/header/NAV.svg";
        }
    });
}