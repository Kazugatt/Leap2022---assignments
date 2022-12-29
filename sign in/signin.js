const emailTarget = document.querySelector('#email');
const passwordTarget = document.querySelector('#password');
const repasswordTarget = document.querySelector('#repassword');

const getFeildValues = () => {
  return {
    email: emailTarget.value,
    password: passwordTarget.value,
    repassword: repasswordTarget.value,
  };
};

const signupSubmit = () => {
  const values = getFeildValues();

  fetch('http://localhost:3333/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((res) => {
      console.warn(res);
    });
  //http://localhost:3333/api/signup POST ${values}
};

const UPPER_LETTER = 'QWERTYUIOPASDFGHJKLZXCVBNM';
const SPECIALS = '!@#$%^&*.~';
const LOWER_LETTER = UPPER_LETTER.toLocaleLowerCase();
const NUMBERS = '0123456789';

const passwordCheck = (password, repassword) => {
  let match = false;
  let containsUpper = false;
  let containsLower = false;
  let containsDigit = false;
  let containsChar = false;
  let lengthPassed = false;

  match = password === repassword;
  lengthPassed = password.length >= 8;

  for (const char of password.split('')) {
    if (!containsUpper) containsUpper = UPPER_LETTER.includes(char);
    if (!containsLower) containsLower = LOWER_LETTER.includes(char);
    if (!containsDigit) containsDigit = NUMBERS.includes(char);
    if (!containsChar) containsChar = SPECIALS.includes(char);
  }

  return { match, containsUpper, containsLower, containsDigit, containsChar, lengthPassed };
};

const upperTarget = document.querySelector('#upper');
const lowerTarget = document.querySelector('#lower');
const numberTarget = document.querySelector('#digit');
const charTarget = document.querySelector('#char');
const lengthPassed = document.querySelector('#length');

passwordTarget.addEventListener('input', () => {
  const { password, repassword } = getFeildValues();
  const passwordInfo = passwordCheck(password, repassword);
  console.log(passwordInfo);
  if (passwordInfo.containsUpper) {
    console.log('upper');
    upperTarget.checked = true;
  } else {
    upperTarget.checked = false;
  }

  if (passwordInfo.containsDigit) {
    console.log('digit');
    numberTarget.checked = true;
  } else {
    numberTarget.checked = false;
  }

  if (passwordInfo.containsLower) {
    console.log('lower');
    lowerTarget.checked = true;
  } else {
    lowerTarget.checked = false;
  }

  if (passwordInfo.containsChar) {
    console.log('char');
    charTarget.checked = true;
  } else {
    charTarget.checked = false;
  }

  if (passwordInfo.lengthPassed) {
    console.log('length');
    lengthPassed.checked = true;
  } else {
    lengthPassed.checked = false;
  }
});
