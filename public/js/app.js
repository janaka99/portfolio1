const navslide = () =>{
    const toggleButton = document.querySelector('.burger');
    const navigation = document.querySelector('.navigation');
    const body = document.querySelector('body')

        toggleButton.addEventListener('click', () =>{
            navigation.classList.toggle('nav-active');
            body.classList.toggle('nav-active');
        });
    }
    navslide();