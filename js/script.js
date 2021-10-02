let menu = document.querySelector('#menu-bars');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
};
