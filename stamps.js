const stampCount = 10;

const stampCardE1 = document.querySelector('.stamp-card');

const stampCountE1 = document.querySelector('.stamp-count');

function setStampCount(count) {
  stampCountE1.textContent = `You have ${count} stamps.`;
}

set stampCount(stampCount);

if (stampCount >= 10){
  stampCardE1.classList.add('completed');
}
