const slider = () => {
    if (document.body.classList.contains('with-slider')) {
        slider();
    } 
    
    function slider() {
        const slider = document.querySelector('.slider'),
              sliderInner = document.querySelector('.slider__inner'),
              slides = document.querySelectorAll('.slider__item'),
              arrowUp = document.querySelector('.slider__arrow_up'),
              arrowDown = document.querySelector('.slider__arrow_down'),
              indicators = document.querySelector('.slider__indicators'),
              dots = [],
              height = window.getComputedStyle(slider).height;
    
        let offset = 0;
        let slideIndex = 1;
    
        sliderInner.style.height = `${100 * slides.length}%`;
    
        slides.forEach((slide, i) => {
            slide.style.height = height;
        });
    
    
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider__dot');
            dot.setAttribute('data-slide-to', i);
    
            indicators.append(dot);
            dots.push(dot);
    
            if (i == 0) {
                dot.classList.add('slider__dot_active');
            }
        }
    
        arrowDown.addEventListener('click', (e) => {
            if (offset == (removeChars(height) * (slides.length - 1))) {
                offset = 0;
                slideIndex = 0;
            } 
            else {
                offset += removeChars(height);
                slideIndex += 1;
            }
    
            if (slideIndex == 2) {
                slideIndex--;
            }
    
            sliderInner.style.transform = `translateY(-${offset}px)`;
            setActiveDot();
    
        })
    
    
        arrowUp.addEventListener('click', (e) => {
            if (offset == 0) {
                offset = (removeChars(height) * (slides.length - 1));
                slideIndex = 1;
            } else {
                offset -= removeChars(height); 
                slideIndex -= 1;
            }
    
            sliderInner.style.transform = `translateY(-${offset}px)`;
            setActiveDot();
    
        })
    
    
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = +e.target.getAttribute('data-slide-to');
    
                offset = removeChars(height) * (slideTo);
                sliderInner.style.transform = `translateY(-${offset}px)`;
    
                dots.forEach(dot => {
                    dot.classList.remove('slider__dot_active');
                });
                dot.classList.add('slider__dot_active');
            })
        })
    
    
    
    
        function removeChars(str) {
            return +str.replace(/\D/g, '');
        }
    
        function setActiveDot() {
            dots.forEach(dot => {
                dot.classList.remove('slider__dot_active');
            })
            dots[slideIndex].classList.add('slider__dot_active');
        }
    
    }
    
};

export default slider;