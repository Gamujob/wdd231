// THIS IS FOR DECORATING THE THANKYOU HTML

const params = new URLSearchParams(window.location.search);

const firstName = params.get('firstname');
const lastName = params.get('lastname');
const email = params.get('useremail');
const phone = params.get('phone');
const organization = params.get('organisation');
const timestamp = params.get('form_timestamp');

document.getElementById('results').innerHTML = `
<p><strong>First Name: </strong> ${firstName}</p>
<p><strong>Last Name: </strong> ${lastName}</p>
<p><strong>Email: </strong> ${email}</p>
<p><strong>Phone: </strong> ${phone}</p>
<p><strong>Organization: </strong> ${organization}</p>
<p><strong>Submitted: </strong> ${timestamp}</p>
`;