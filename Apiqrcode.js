import axios from "axios";

const stampCardForm = document.querySelector("#stamp-card-form");
stampCardForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  console.log("handleSubmit()");
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  const stampCard = {
    businessName: data.get("business-name"),
    rewardDescription: data.get("reward-description"),
    numberOfStamps: parseInt(data.get("number-of-stamps"), 10),
    expiresAfter: parseInt(data.get("expires-after"), 10)
  };

  // Send the stamp card data to the server to generate a QR code
  const url = `https://api.qrserver.com/v1/create-qr-code/?data=[497aad20-2cc5-11ee-ac34-03b51c95ea9b]&size=[200px]x[200px]`;
  // fetch
  axios(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(stampCard)
  })
    .then(response => response.json())
    .then(qrCode => {
      // Display the QR code to the user
      // You can use any QR code generator library of your choice here
      // For example, qrcode.js: https://davidshimjs.github.io/qrcodejs/
      const qrCodeImg = document.createElement("img");
      qrCodeImg.src = qrCode;
      document.body.appendChild(qrCodeImg);
    })
    .catch(error => {
      console.error(`Error: ${error}`);
    });
}
