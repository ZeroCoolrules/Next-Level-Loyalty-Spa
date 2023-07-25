const stampCardForm = document.querySelector("#stamp-card-form");
stampCardForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
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
  const url =
    "http(s)://api.qrserver.com/v1/create-qr-code/?data=[URL-encoded-text]&size=[200px]x[200px]";
  fetch(url, {
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
