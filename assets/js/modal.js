const openFindIdButton = document.getElementById("find-id-modal-open");
const findIdModal = document.querySelector(".find-id-modal");
const closeFindIdButton = findIdModal.querySelector(".find-id-modal__btn");
const overlay = findIdModal.querySelector(".find-id-modal__overlay");

const openFindIdModal = () => {
  findIdModal.classList.remove("hidden");
};

const closeFindIdModal = () => {
  findIdModal.classList.add("hidden");
};

openFindIdButton.addEventListener("click", openFindIdModal);
closeFindIdButton.addEventListener("click", closeFindIdModal);
overlay.addEventListener("click", closeFindIdModal);
