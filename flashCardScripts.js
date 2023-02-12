//import axios from "axios";
// window.addEventListener("beforeunload", function (e) {
//   debugger;
// });
let randomCard = {};
const saveFlashCard = async () => {
  console.log("add new card button clicked");
  await fetch("http://localhost:4001/flashCard/createNewFlashCard", {
    method: "POST",
    body: JSON.stringify({
      key: document.getElementById("key").value,
      info: document.getElementById("info").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  document.getElementById("key").value = "";
  document.getElementById("info").value = "";
};

const getFlashCard = async () => {
  fetch("http://localhost:4001/flashCard/getRandomFlashCardForUser")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      randomCard = data;
      document.getElementById("popupFlashCard").innerText = data.key;
    });
};

const swapTheCard = () => {
  if (document.getElementById("popupFlashCard").innerText == randomCard.key)
    document.getElementById("popupFlashCard").innerText = randomCard.info;
  else document.getElementById("popupFlashCard").innerText = randomCard.key;
};

/// attaching scripts to buttons
document.getElementById("addCardButton").onclick = saveFlashCard;
document.getElementById("popupFlashCard").onclick = swapTheCard;
//////////

getFlashCard();
