// FOR THE INFORMATION ENTERED
const params = new URLSearchParams(window.location.search);

const fName = params.get('firstname');
const lName = params.get('secondname');
const phone = params.get('phone');
const email = params.get('email');
const descpt = params.get('information');
const date = params.get('submissiondate');
const timestamp = params.get('form_timestamp');

document.querySelector('#result').innerHTML = `
<p><strong>First Name: </strong> ${fName}</p>
<p><strong>Last Name: </strong> ${lName}</p>
<p><strong>Phone: </strong> ${phone}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Description: </strong> ${descpt}</p>
<p><strong>Date: </strong> ${date}</p>
<p><strong>Submitted: </strong> ${timestamp}</p>
`;


