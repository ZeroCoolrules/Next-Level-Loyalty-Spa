// Once we have a reference to the HTML element in the stampCardForm variable, we're adding an event listener using the
// addEventListener() method. This method allows us to listen for a specific event (in this case "submit" event )
// on the selected HTML element, and specify a function to be called when the event is triggered (in this case the handleSubmit()function)
// So when the "submit" event is triggered on the HTML element specified by the stampCardForm, the handleSubmit() function
// will be called. This Function could contain code to handle the user's submit action such as validating form fields

window.prepareForm = function() {
  const stampCardForm = document.querySelector("#stamp-card-form");
  stampCardForm.addEventListener("submit", handleSubmit);
};

//This code defies a function called handleSubmit that takes an event arguement. This function is likely
// likely being used as an event handler, which is triggered when a specific event occurs (such as a form submission)
// (event.preventDefault()) prevents the default behavior of the event from occurring in the case of a form submission even this prevents
// the browser from reloading the page

function handleSubmit(event) {
  console.log("handleSubmit");
  event.preventDefault();
  // These two lines of the function use the FormData() constructor to create a new FormData Object based on the form element that
  //triggered the event(event.currentTarget) This Object contains data from all form fields in the form element
  const form = event.currentTarget;
  const data = new FormData(form);

  // The remaining lines of the function use the data.get() method to retrieve specific values from the FormData object.
  // These values are being assigned to an object called stampCard, which likely represents some kind of rewards card
  const stampCard = {
    businessName: data.get("business-name"),
    rewardDescription: data.get("reward-description"),
    numberOfStamps: parseInt(data.get("number-of-stamps"), 10),
    expiresAfter: parseInt(data.get("expires-after"), 10)
  };

  // Send the stamp card data to the server to generate a QR code
  const url = `https://webit-qr-code.p.rapidapi.com/generate`;
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
