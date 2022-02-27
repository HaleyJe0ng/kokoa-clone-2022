const formReply = document.querySelector(".reply");
const formInput = formReply.querySelector("input");
const messageContainer = document.querySelector(
  ".message-row--own .message-row__container"
);
const MESSAGE_CLASS = [
  "message-row__content",
  "message__info",
  "message__bubble",
  "message__time",
];

function getCurrentTime() {
  const time = new Date();
  const hours = time.getHours() > 10 ? time.getHours() : `0${time.getHours()}`;
  const minutes =
    time.getMinutes() > 10 ? time.getMinutes() : `0${time.getMinutes()}`;
  return `${hours}:${minutes}`;
}

function handleSubmitReply(event) {
  event.preventDefault();
  const msg = formInput.value;
  const msgRowContent = document.createElement("div");
  const msgInfo = document.createElement("div");
  const msgBubble = document.createElement("span");
  const msgTime = document.createElement("span");

  messageContainer.appendChild(msgRowContent);
  msgRowContent.appendChild(msgInfo);
  msgInfo.appendChild(msgBubble);
  msgInfo.appendChild(msgTime);

  msgRowContent.classList.add(MESSAGE_CLASS[0]);
  msgInfo.classList.add(MESSAGE_CLASS[1]);
  msgBubble.classList.add(MESSAGE_CLASS[2]);
  msgTime.classList.add(MESSAGE_CLASS[3]);

  msgBubble.innerText = msg;
  msgTime.innerText = getCurrentTime();
  formInput.value = "";
}
formReply.addEventListener("submit", handleSubmitReply);
