//template_vacr329
//service_3e7crk8
//PK dexkIPyatsyDD7suz

function contact(event) {
    event.preventDefault();
    // emailjs
    // .sendForm(
    //     'service_3e7crk8',
    //     'template_vacr329',
    //     event.target,
    //     'dexkIPyatsyDD7suz'
    // ).then(() => {
    //     console.log('this sent email')
    // })
    const loading = document.querySelector('.model__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    // console.log(document.querySelector('.modal__overlay--loading'));
    // console.log(loading)
    setTimeout(() => {
        // loading.classList.remove("model__overlay--visible");
        // success.classList += " modal__overlay--visible";
        
        console.log('it worked 1')
    }, 500);
}