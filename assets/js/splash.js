const splashScreen = document.getElementById("splash-screen");
const ACCESSED_KEY = "accessed";
let userAccess = getLocalStorage();

function setLocalStorage() {
  localStorage.setItem(ACCESSED_KEY, userAccess);
}
function getLocalStorage() {
  return localStorage.getItem(ACCESSED_KEY);
}
function removeSplash() {
  setTimeout(() => {
    let opacity = 1;
    let i = 0;
    let timer = setInterval(() => {
      if (opacity <= 0.1) {
        clearInterval(timer);
        splashScreen.remove();
      }
      splashScreen.style.opacity = opacity;
      splashScreen.style.filter = `opacity=${opacity * 100}%`;
      i += 0.1;
      opacity -= opacity * (0.1 + i);
    }, 70);
  }, 2000);
}

window.onload = function () {
  console.log(userAccess);
  if (userAccess === null) {
    userAccess = false;
    setLocalStorage();
  }
  if (userAccess === "true") {
    console.log("here!");
    splashScreen.remove();
  } else {
    userAccess = true;
    setLocalStorage();
    removeSplash();
  }
};
