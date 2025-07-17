let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;


function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  console.log(x,y)
  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    console.log(isOdd);
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}


function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

// Header: <img id="personal-logo" src="./assets/d.2.PNG" alt="" />
// Footer: <img src="./assets/d (1).2.PNG" class="footer__logo--img" alt="" />

//For emailjs:
//template_vacr329
//service_3e7crk8
//PK dexkIPyatsyDD7suz

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_3e7crk8",
      "template_vacr329",
      event.target,
      "dexkIPyatsyDD7suz"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable");
    });
}

  //toggle modal
    // console.log('toggleModal()')


function toggleModal() {
if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
}
      isModalOpen = true;
  document.body.classList += " modal--open";
}
