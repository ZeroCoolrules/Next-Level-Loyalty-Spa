const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://webit-qr-code.p.rapidapi.com/generate',
  params: {
    data: 'https://www.nextlevelloyalty.com/first-stamp',
    format: '<REQUIRED>',
    size: '512',
    gradient: '024bda,8572ea',
    background_color: 'transparent',
    image_id: 'f222c8be0475292b2a23a82ff93ac496',
    image_margin: '10'
  },
  headers: {
    'X-RapidAPI-Key': '8280131940mshb79d8ba45594f24p1732abjsnc285fec395b5',
    'X-RapidAPI-Host': 'webit-qr-code.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
