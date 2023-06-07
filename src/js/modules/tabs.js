const tabs = (trigger, triggerParent, content) => {
    if (document.body.classList.contains('with-tabs')) {
        const triggers       = document.querySelectorAll(trigger),
              triggersParent = document.querySelector(triggerParent),
              items          = document.querySelectorAll(content);
        

        hideTabContent();
        showTabContent();

        triggersParent.addEventListener('click', (e) => {
            const target = e.target;

            if (target && target.classList.contains('produce__btn')) {
                triggers.forEach((trigger, i) => {
                        if (target == trigger) {
                            hideTabContent();
                            showTabContent(i);
                        }
                });
            }
        });


        function hideTabContent() {
            items.forEach(item => {
                item.style.display = 'none';
            })

            triggers.forEach(trigger => {
                trigger.classList.remove('produce__btn_active');
            })
        };

        function showTabContent(i = 0) {
            items[i].style.display = 'flex';
            triggers[i].classList.add('produce__btn_active');
        };
    }
};

export default tabs;