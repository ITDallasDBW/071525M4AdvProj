let isModalOpen = false;
let contrastToggle = false;

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
