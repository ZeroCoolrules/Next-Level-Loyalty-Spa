//Adding Qr Code Generator API to make a HTTP request to API endpoint, passing in necessary parameters and the API key


// Get the form and button elements
const formE1 = document.querySelector('#stamp-card-form');
const generatorQrBtn = document.querySelector('#generate-qr-btn');

// Adding a click event listener to generate QR button
generatorQrBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Get form data
  const name =  formE1.querySelector('#name-input').value;
  const email = formE1.querySelector('#email-input').value;
  const stampCount = parseInt(formE1.querySelector('#stamp-count-input').value);

  // Make an HTTP request to the QR code API
  const apiURL = `https://api.qr-tiger.com/v1/qrcode?key=497aad20-2cc5-11ee-ac34-03b51c95ea9b&size=400x400&content=${name} ${email} ${stampCount}`;

  fetch(apiURL)
  .then(response => response.json())
  .then(data => {

//API response successful show Qr Code to user
if (data.success) {
    const qrCodeImg = document.createElement('img');
    qrCodeImg.src = data.imageUrl;
    document.body.appendChild(qrCodeImg);
  } else {
    // If API response is not successful show error message
    console.error(data.errorMessage);}
}
  })
  .catch(error => {
    console.error(error);
  });
});
