const hamburger = () => {
    const hamburger   = document.querySelector('.header__hamburger'),
          menu        = document.querySelector('.header__wrapper'),
          menuBacking = document.querySelector('.header__backing');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('header__wrapper_active');
        menuBacking.classList.toggle('header__backing_active');
        
        if (menu.classList.contains('header__wrapper_active')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = '';
        }
    })

    menuBacking.addEventListener('click', (e) => {
        if(e.target.classList.contains('header__backing') && menu.classList.contains('header__wrapper_active')) {
            menu.classList.remove('header__wrapper_active');
            menuBacking.classList.remove('header__backing_active');
            document.body.style.overflowY = '';
        }
    })
};

export default hamburger;