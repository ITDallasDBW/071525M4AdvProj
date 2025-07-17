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

let isModalOpen = false;
function toggleModal() {
if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
}
      isModalOpen = true;
  document.body.classList += " modal--open";
}
