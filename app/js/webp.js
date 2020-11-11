document.addEventListener('DOMContentLoaded', function(){ 
    const supportWebp =()=> {
        const elem = document.createElement('canvas');
        return elem.getContext && elem.getContext('2d') ?
            elem.toDataURL('image/webp').indexOf('data:image/webp') === 0 :
            false;
    }
    const result = supportWebp();

    //block about-us
    const aboutUs = document.querySelector('.about-us__info-baner');

    if(result == 'true'){
        aboutUs.classList.add('about-us__info-baner-img-webp')
    }else{
        aboutUs.classList.add('about-us__info-baner-img')
    }
});