const modals = () => {
    const modal = document.querySelector('.modal'),
        loginWindow = document.querySelector('[data-login-window]'),
        registerWindow = document.querySelector('[data-register-window]'),
        btnLoginOpen = document.querySelector('[data-profile-login]'), 
        btnsRegisterOpen = document.querySelectorAll('[data-register]'), 
        btnsClose = document.querySelectorAll('[data-modal-close]');


    btnLoginOpen.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(registerWindow, 'modal__window_active');
        openModal();
        openModal(loginWindow, 'modal__window_active');
    });

    btnsRegisterOpen.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal(loginWindow, 'modal__window_active');
            openModal(registerWindow, 'modal__window_active');
            if (!modal.classList.contains('modal_active')) {
                openModal();
                openModal(registerWindow, 'modal__window_active');
            } 
        })
    })


    btnsClose.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal();
        });
    })



    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    })

    modal.addEventListener('keydown', (e) => {
        if (e.code == 'Escape' && modal.classList.contains('modal_active')) {
            closeModal();
        }
    })




    function openModal(window = modal, classActive = 'modal_active') {
        // modal.classList.add('modal_active');
        window.classList.add(`${classActive}`);
        document.body.style.overflowY = 'hidden';
    }

    function closeModal(window = modal, classActive = 'modal_active') {
        window.classList.remove(`${classActive}`);
        document.body.style.overflowY = '';
    }

};

export default modals;